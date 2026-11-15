// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';

describe('Project Structure Invariants (PROJECT-STRUCTURE-v10 & CI-CD-AND-TOOLS-v10)', () => {
	const requiredDocs = [
		'PROJECT-CONTEXT.md',
		'AGENTS.md',
		'CLAUDE.md',
		'GEMINI.md',
		'static/llms.txt',
		'README.md'
	];

	it('усі обовʼязкові документи канону існують у корені проєкту', () => {
		for (const doc of requiredDocs) {
			expect(existsSync(doc), `Документ ${doc} обовʼязковий`).toBe(true);
		}
	});

	it('package.json містить обовʼязкові гейти канону', () => {
		const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
		expect(pkg.scripts).toBeDefined();
		expect(pkg.scripts.check).toBeDefined();
		expect(pkg.scripts.lint).toBeDefined();
		expect(pkg.scripts['test:unit']).toBeDefined();
		expect(pkg.scripts['test:e2e']).toBeDefined();
		expect(pkg.scripts['audit:ci']).toBeDefined();
	});

	it('PROJECT-CONTEXT.md містить реєстр префіксів сховища aqa_', () => {
		const context = readFileSync('PROJECT-CONTEXT.md', 'utf8');
		expect(context).toContain('aqa_');
		expect(context).toContain('STORAGE-NAMESPACE-v10');
	});
});
