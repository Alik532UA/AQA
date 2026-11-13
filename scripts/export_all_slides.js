import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { slidesData } from '../src/lib/data/slidesData.ts';
import { slideToMarkdown } from '../src/lib/utils/markdownExporter.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'slides-md');

const CATEGORIES = {
	M: {
		folder: '01_manual_qa',
		title: 'Manual QA (Теорія тестування)',
		prefix: 'M'
	},
	A: {
		folder: '02_automation_qa',
		title: 'Automation QA (.NET / C#)',
		prefix: 'A'
	},
	C: {
		folder: '03_senior_consultant',
		title: 'Senior AQA Consultant (Desktop / Electron / Windows)',
		prefix: 'C'
	},
	F: {
		folder: '04_flutter_nayax_qa',
		title: 'Middle Manual QA Engineer (Flutter / Mobile — Nayax)',
		prefix: 'F'
	}
};

// Safe file name generator
function getSafeFileName(index, slide) {
	const num = String(index).padStart(2, '0');
	let cleanTitle = slide.menuTitle
		.replace(/&/g, 'and')
		.replace(/[/\\?%*:|"<>.,]/g, '')
		.trim()
		.replace(/\s+/g, '_')
		.replace(/_+/g, '_');
	return `${num}_${cleanTitle}.md`;
}

// Clean previous export folder if exists
if (fs.existsSync(OUTPUT_DIR)) {
	fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// Group slides by category
const grouped = {
	M: [],
	A: [],
	C: [],
	F: []
};

slidesData.forEach((slide) => {
	if (grouped[slide.category]) {
		grouped[slide.category].push(slide);
	}
});

let masterReadme = `# QA Interview & Senior Consultant Presentation — Markdown Slides

Колекція всіх матеріалів та слайдів у форматі Markdown, структурована за категоріями у точному порядку сайту.

---

## Зміст

`;

Object.entries(CATEGORIES).forEach(([catKey, catInfo]) => {
	const catFolder = path.join(OUTPUT_DIR, catInfo.folder);
	fs.mkdirSync(catFolder, { recursive: true });

	const slides = grouped[catKey] || [];
	masterReadme += `### ${catInfo.title}\n\n`;

	slides.forEach((slide, idx) => {
		const slideNum = idx + 1;
		const fileName = getSafeFileName(slideNum, slide);
		const filePath = path.join(catFolder, fileName);

		// Navigation links for inside the file
		const prevSlide = idx > 0 ? getSafeFileName(idx, slides[idx - 1]) : null;
		const nextSlide = idx < slides.length - 1 ? getSafeFileName(idx + 2, slides[idx + 1]) : null;

		let navBar = `\n\n---\n\n`;
		const navParts = [];
		if (prevSlide) {
			navParts.push(`[← Попередній: ${slides[idx - 1].menuTitle}](./${prevSlide})`);
		}
		navParts.push(`[📑 До змісту](../README.md)`);
		if (nextSlide) {
			navParts.push(`[Наступний: ${slides[idx + 1].menuTitle} →](./${nextSlide})`);
		}
		navBar += navParts.join(' | ') + '\n';

		// Generate markdown content
		let content = slideToMarkdown(slide);
		content += navBar;

		fs.writeFileSync(filePath, content, 'utf8');

		// Add entry to master README
		masterReadme += `${slideNum}. [${slide.menuTitle}](./${catInfo.folder}/${fileName})`;
		if (slide.menuSub) {
			masterReadme += ` — *${slide.menuSub}*`;
		}
		masterReadme += `\n`;
	});

	masterReadme += `\n`;
});

// Write master README.md
fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), masterReadme, 'utf8');

console.log(`Successfully exported all ${slidesData.length} slides to:`, OUTPUT_DIR);
