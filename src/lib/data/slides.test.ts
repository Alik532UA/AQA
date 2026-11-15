import { describe, it, expect } from 'vitest';
import { slidesData } from './slidesData';
import { qaCards } from './qaData';
import { slideToMarkdown } from '#lib/utils/markdownExporter';

describe('AQA Dashboard Slides & Data Integrity', () => {
	it('містить повний набір слайдів понад 20 штук', () => {
		expect(slidesData.length).toBeGreaterThanOrEqual(20);
	});

	it('кожен слайд має унікальний id, валідну категорію та назву в меню', () => {
		const seenIds = new Set<string>();
		const validCategories = new Set(['M', 'A', 'C', 'F']);

		for (const slide of slidesData) {
			expect(seenIds.has(slide.id)).toBe(false);
			seenIds.add(slide.id);

			expect(validCategories.has(slide.category)).toBe(true);
			expect(slide.menuTitle).toBeTruthy();
			expect(slide.layout).toBeTruthy();
			expect(Array.isArray(slide.cards)).toBe(true);
			expect(slide.cards.length).toBeGreaterThan(0);

			for (const card of slide.cards) {
				const hasTitle = Boolean(card.title && card.title.trim().length > 0);
				const hasContent = Boolean(card.contentHtml && card.contentHtml.trim().length > 0);
				expect(hasTitle || hasContent).toBe(true);
			}
		}
	});

	it('містить структуровані QA картки у qaCards', () => {
		expect(qaCards.length).toBeGreaterThanOrEqual(5);
		for (const card of qaCards) {
			expect(card.id).toBeTruthy();
			expect(card.title).toBeTruthy();
			expect(card.category).toBeTruthy();
			expect(Array.isArray(card.tags)).toBe(true);
		}
	});

	it('slideToMarkdown генерує валідний markdown документ', () => {
		const firstSlide = slidesData[0];
		expect(firstSlide).toBeDefined();
		if (firstSlide) {
			const md = slideToMarkdown(firstSlide);
			expect(md).toContain(`# ${firstSlide.menuTitle}`);
			expect(md).toContain('**Категорія:**');
		}
	});
});
