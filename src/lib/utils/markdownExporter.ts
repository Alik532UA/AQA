import type { Slide } from '#lib/data/slidesData';

/**
 * Converts HTML tables to standard GitHub-flavored Markdown tables.
 */
function convertTablesToMarkdown(html: string): string {
	return html.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_match, tableContent) => {
		const rows: string[][] = [];
		const isHeaderRow: boolean[] = [];

		const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
		let trMatch;
		while ((trMatch = trRegex.exec(tableContent)) !== null) {
			const trInner = trMatch[1];
			const cells: string[] = [];
			let hasTh = false;

			const cellRegex = /<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi;
			let cellMatch;
			while ((cellMatch = cellRegex.exec(trInner)) !== null) {
				if (cellMatch[1].toLowerCase() === 'th') {
					hasTh = true;
				}
				const cellText = cellMatch[2]
					.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
					.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
					.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
					.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
					.replace(/<[^>]+>/g, '')
					.replace(/\s+/g, ' ')
					.trim();
				cells.push(cellText);
			}

			if (cells.length > 0) {
				rows.push(cells);
				isHeaderRow.push(hasTh);
			}
		}

		if (rows.length === 0) return '';

		const colCount = Math.max(...rows.map((r) => r.length));
		const lines: string[] = [];

		// Header row
		const headerCells = [...rows[0]];
		while (headerCells.length < colCount) headerCells.push(' ');
		lines.push(`| ${headerCells.join(' | ')} |`);
		lines.push(`| ${Array(colCount).fill(':---').join(' | ')} |`);

		// Body rows
		const startIdx = isHeaderRow[0] ? 1 : 0;
		for (let i = startIdx; i < rows.length; i++) {
			const rowCells = [...rows[i]];
			while (rowCells.length < colCount) rowCells.push(' ');
			lines.push(`| ${rowCells.join(' | ')} |`);
		}

		return '\n\n' + lines.join('\n') + '\n\n';
	});
}

/**
 * Converts a Slide object into clean, formatted GitHub-flavored Markdown.
 */
export function slideToMarkdown(slide: Slide): string {
	let md = `# ${slide.menuTitle}\n\n`;

	if (slide.menuSub) {
		md += `> **Підтеми:** ${slide.menuSub}\n\n`;
	}

	const categoryName =
		slide.category === 'M'
			? 'Manual QA'
			: slide.category === 'A'
				? 'Automation QA'
				: slide.category === 'C'
					? 'Senior AQA Consultant'
					: slide.category === 'F'
						? 'Middle Flutter QA (Nayax)'
						: 'C# Core & Advanced (.NET)';

	md += `**Категорія:** ${categoryName}\n\n`;
	md += `---\n\n`;

	for (let i = 0; i < slide.cards.length; i++) {
		const card = slide.cards[i];
		if (card.title) {
			md += `## ${card.title}\n\n`;
		}

		if (card.contentHtml) {
			// 1. Process tables first before stripping tags
			let text = convertTablesToMarkdown(card.contentHtml);

			// 2. Process preformatted code blocks and identify language
			text = text.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_match, codeInner) => {
				let lang = '';
				const langMatch = codeInner.match(/<code[^>]*class=["'][^"']*language-([a-z0-9_-]+)/i);
				if (langMatch) {
					lang = langMatch[1];
				} else if (slide.category === 'S' || slide.category === 'A') {
					lang = 'csharp';
				} else if (slide.category === 'F') {
					lang = 'dart';
				}
				const clean = codeInner.replace(/<\/?code[^>]*>/gi, '').trim();
				return `\n\`\`\`${lang}\n` + clean + '\n```\n\n';
			});

			text = text
				// Headers
				.replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, '### $1\n\n')
				// Bold & Italics
				.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
				.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
				.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
				.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
				// Inline code
				.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
				// Lists
				.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
				.replace(/<\/ul>/gi, '\n')
				.replace(/<\/ol>/gi, '\n')
				// Paragraphs, divs & breaks
				.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
				.replace(/<div[^>]*>/gi, '\n')
				.replace(/<\/div>/gi, '\n')
				.replace(/<br\s*\/?>/gi, '\n')
				.replace(/<hr\s*\/?>/gi, '\n---\n\n')
				// Remove remaining tags
				.replace(/<[^>]+>/g, '')
				// Decode HTML entities
				.replace(/&nbsp;/g, ' ')
				.replace(/&amp;/g, '&')
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>')
				.replace(/&quot;/g, '"')
				.replace(/&#39;/g, "'")
				.replace(/&#123;/g, '{')
				.replace(/&#125;/g, '}');

			// Normalize indentation outside of code blocks
			let inCode = false;
			text = text
				.split('\n')
				.map((line) => {
					if (line.trim().startsWith('```')) {
						inCode = !inCode;
						return line.trim();
					}
					return inCode ? line : line.trim();
				})
				.join('\n')
				.replace(/\n{3,}/g, '\n\n')
				.trim();

			md += text;
			// Only add separator BETWEEN cards, not after the last card
			if (i < slide.cards.length - 1) {
				md += '\n\n---\n\n';
			} else {
				md += '\n\n';
			}
		}
	}

	return md.trim();
}
