import type { Slide } from '#lib/data/slidesData';

/**
 * Converts a Slide object into clean, formatted GitHub-flavored Markdown.
 */
export function slideToMarkdown(slide: Slide): string {
	let md = `# ${slide.menuTitle}\n\n`;

	if (slide.menuSub) {
		md += `> **Підтеми:** ${slide.menuSub}\n\n`;
	}

	md += `**Категорія:** ${slide.category === 'M' ? 'Manual QA' : slide.category === 'A' ? 'Automation QA' : slide.category === 'C' ? 'Senior AQA Consultant' : 'Middle Flutter QA (Nayax)'}\n\n`;
	md += `---\n\n`;

	for (const card of slide.cards) {
		if (card.title) {
			md += `## ${card.title}\n\n`;
		}

		if (card.contentHtml) {
			let text = card.contentHtml
				// Headers
				.replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, '### $1\n\n')
				// Bold & Italics
				.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
				.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
				.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
				.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
				// Preformatted code blocks
				.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_match, code) => {
					const clean = code.replace(/<\/?code[^>]*>/gi, '').trim();
					return '\n```\n' + clean + '\n```\n\n';
				})
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
				.replace(/&#39;/g, "'");

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

			md += text + '\n\n---\n\n';
		}
	}

	return md.trim();
}
