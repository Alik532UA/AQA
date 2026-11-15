// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';

describe('Content Security Policy (SECURITY-v10 & CSP-v10)', () => {
	it('налаштовано строгий режим hash для CSP у vite.config.ts', () => {
		const viteConfig = readFileSync('vite.config.ts', 'utf8');
		expect(viteConfig).toContain("mode: 'hash'");
		expect(viteConfig).toContain("'default-src': ['self']");
		expect(viteConfig).toContain("'form-action': ['none']");
		expect(viteConfig).toContain("'base-uri': ['self']");
		expect(viteConfig).toContain("'frame-ancestors': ['none']");
	});

	it('заборонено використання небезпечного unsafe-inline у script-src у vite.config.ts', () => {
		const viteConfig = readFileSync('vite.config.ts', 'utf8');
		const scriptSrcMatch = viteConfig.match(/'script-src':\s*\[(.*?)\]/s);
		expect(scriptSrcMatch).not.toBeNull();
		if (scriptSrcMatch) {
			expect(scriptSrcMatch[1]).not.toContain("'unsafe-inline'");
		}
	});

	it('app.html не містить сирого мета-тегу з unsafe-inline для скриптів', () => {
		const appHtml = readFileSync('src/app.html', 'utf8');
		expect(appHtml).not.toContain("script-src 'self' 'unsafe-inline'");
	});

	it('згенерований артефакт build/index.html містить валідний CSP при наявності збірки', () => {
		const indexPath = 'build/index.html';
		if (existsSync(indexPath)) {
			const html = readFileSync(indexPath, 'utf8');
			expect(html).toContain('content-security-policy');
			expect(html).toContain("default-src 'self'");
		}
	});
});
