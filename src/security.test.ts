import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

describe('Security Baseline (SECURITY-v10)', () => {
	function scanDir(dir: string, fileList: string[] = []): string[] {
		const files = readdirSync(dir);
		for (const file of files) {
			const fullPath = join(dir, file);
			if (statSync(fullPath).isDirectory()) {
				if (
					!fullPath.includes('node_modules') &&
					!fullPath.includes('.svelte-kit') &&
					!fullPath.includes('build')
				) {
					scanDir(fullPath, fileList);
				}
			} else if (file.endsWith('.svelte') || file.endsWith('.ts')) {
				fileList.push(fullPath);
			}
		}
		return fileList;
	}

	it('забороняє використання eval, new Function та document.write у вихідному коді', () => {
		const sourceFiles = scanDir('src').filter((f) => !f.includes('.test.ts'));
		for (const file of sourceFiles) {
			const content = readFileSync(file, 'utf8');
			expect(content).not.toMatch(/\beval\s*\(/);
			expect(content).not.toMatch(/\bnew\s+Function\s*\(/);
			expect(content).not.toMatch(/\bdocument\.write\s*\(/);
		}
	});

	it('гарантує безпечне екранування тексту при підсвічуванні пошуку в Card.svelte', () => {
		const cardSource = readFileSync('src/lib/components/Card.svelte', 'utf8');
		expect(cardSource).toContain('function escapeHtml');
		expect(cardSource).toContain(".replace(/&/g, '&amp;')");
		expect(cardSource).toContain(".replace(/</g, '&lt;')");
		expect(cardSource).toContain(".replace(/>/g, '&gt;')");
	});

	it('перевіряє наявність суворої політики Content-Security-Policy в app.html', () => {
		const appHtml = readFileSync('src/app.html', 'utf8');
		expect(appHtml).toContain('http-equiv="Content-Security-Policy"');
		expect(appHtml).toContain("default-src 'self'");
		expect(appHtml).toContain("font-src 'self'");
	});

	it('гарантує відсутність небезпечних інлайн-скриптів та обробників у даних слайдів', () => {
		const categoriesDir = 'src/lib/data/categories';
		const files = readdirSync(categoriesDir).filter((f) => f.endsWith('.ts'));
		for (const file of files) {
			const content = readFileSync(join(categoriesDir, file), 'utf8');
			expect(content).not.toMatch(/<script\b/i);
			expect(content).not.toMatch(/\bonerror\s*=/i);
			expect(content).not.toMatch(/\bonload\s*=/i);
			expect(content).not.toMatch(/javascript:/i);
		}
	});
});
