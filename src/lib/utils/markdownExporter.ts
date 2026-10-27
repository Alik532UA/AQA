import type { Slide } from '#lib/data/slidesData';

/**
 * Converts a Slide object into clean, formatted GitHub-flavored Markdown.
 */
export function slideToMarkdown(slide: Slide): string {
	let md = `# ${slide.menuTitle}\n\n`;

	if (slide.menuSub) {
		md += `> **Підтеми:** ${slide.menuSub}\n\n`;
	}

	md += `**Категорія:** ${slide.category === 'M' ? 'Manual QA' : 'Automation QA'}\n\n`;
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
				// Code blocks
				.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```\n$1\n```\n\n')
				.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
				// Lists
				.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
				.replace(/<\/ul>/gi, '\n')
				.replace(/<\/ol>/gi, '\n')
				// Paragraphs & breaks
				.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
				.replace(/<br\s*[\/]?>/gi, '\n')
				// Remove remaining tags
				.replace(/<[^>]+>/g, '')
				// Decode HTML entities
				.replace(/&nbsp;/g, ' ')
				.replace(/&amp;/g, '&')
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>')
				.replace(/&quot;/g, '"')
				.replace(/&#39;/g, "'")
				// Normalize multiple newlines
				.replace(/\n{3,}/g, '\n\n')
				.trim();

			md += text + '\n\n---\n\n';
		}
	}

	return md.trim();
}
