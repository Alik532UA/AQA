import { describe, it, expect } from 'vitest';
import { slidesData, manualSlides, automationSlides, consultantSlides, flutterSlides } from './slidesData.js';

describe('AQA Categories Data Integrity', () => {
	it('усі категорії містять слайди', () => {
		expect(manualSlides.length).toBeGreaterThan(0);
		expect(automationSlides.length).toBeGreaterThan(0);
		expect(consultantSlides.length).toBeGreaterThan(0);
		expect(flutterSlides.length).toBeGreaterThan(0);
		expect(slidesData.length).toBe(
			manualSlides.length + automationSlides.length + consultantSlides.length + flutterSlides.length
		);
	});

	it('усі ідентифікатори слайдів суворо унікальні', () => {
		const ids = slidesData.map((s) => s.id);
		const uniqueIds = new Set(ids);
		expect(uniqueIds.size).toBe(ids.length);
	});

	it('кожен слайд має валідну категорію та заголовок', () => {
		const validCategories = new Set(['M', 'A', 'C', 'F']);
		for (const slide of slidesData) {
			expect(validCategories.has(slide.category), `Слайд ${slide.id} має невідому категорію`).toBe(true);
			expect(slide.menuTitle.trim().length, `Слайд ${slide.id} має порожній заголовок`).toBeGreaterThan(0);
			expect(slide.cards.length, `Слайд ${slide.id} не має карток`).toBeGreaterThan(0);
		}
	});

	it('кожна картка має або заголовок, або контент', () => {
		for (const slide of slidesData) {
			for (const card of slide.cards) {
				const hasTitle = Boolean(card.title && card.title.trim().length > 0);
				const hasContent = Boolean(card.contentHtml && card.contentHtml.trim().length > 0);
				expect(hasTitle || hasContent, `Картка у слайді ${slide.id} порожня`).toBe(true);
			}
		}
	});
});
