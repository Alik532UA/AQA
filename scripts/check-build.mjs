/**
 * Перевірка валідності артефактів релізної збірки build/ (GATE-BUILD-OUTPUT)
 */
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const rootDir = process.cwd();
const buildIndex = resolve(rootDir, 'build/index.html');
const notFound = resolve(rootDir, 'build/404.html');

if (!existsSync(buildIndex)) {
	console.error('❌ build/index.html not found! Run npm run build first.');
	process.exit(1);
}

if (!existsSync(notFound)) {
	console.warn('⚠️ build/404.html not found.');
}

const html = readFileSync(buildIndex, 'utf8');
if (!html.includes('<title>')) {
	console.error('❌ build/index.html is missing <title> tag.');
	process.exit(1);
}

console.log('✅ check-build passed: production build directory is valid.');
