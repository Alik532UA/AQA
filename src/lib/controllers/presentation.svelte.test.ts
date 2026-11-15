// @vitest-environment node
import { describe, it, expect, beforeEach } from 'vitest';
import { PresentationController } from './presentation.svelte.js';

describe('PresentationController (Architecture & State)', () => {
	let ctrl: PresentationController;

	beforeEach(() => {
		ctrl = new PresentationController();
	});

	it('ініціалізується з категорією M та базовим слайдом', () => {
		expect(ctrl.activeCategory).toBe('M');
		expect(ctrl.activeSlideId).toBe('m-basics');
		expect(ctrl.categorySlides.length).toBeGreaterThan(0);
	});

	it('перемикає категорії та оновлює поточний слайд', () => {
		ctrl.setCategory('A');
		expect(ctrl.activeCategory).toBe('A');
		expect(ctrl.currentSlide.category).toBe('A');
		expect(ctrl.announcement).toContain('Обрано категорію: A');
	});

	it('підтримує циклічну навігацію вперед і назад', () => {
		const firstId = ctrl.currentSlide.id;

		ctrl.goToNextSlide();
		expect(ctrl.currentSlide.id).not.toBe(firstId);

		ctrl.goToPrevSlide();
		expect(ctrl.currentSlide.id).toBe(firstId);
	});

	it('фільтрує слайди за повнотекстовим пошуком та оновлює a11y анонс', () => {
		ctrl.setSearch('Page Object');
		expect(ctrl.showSearchResults).toBe(true);
		expect(ctrl.matchingSlides.length).toBeGreaterThan(0);
		expect(ctrl.announcement).toContain('Знайдено');

		ctrl.clearSearch();
		expect(ctrl.showSearchResults).toBe(false);
		expect(ctrl.searchQuery).toBe('');
		expect(ctrl.announcement).toBe('Пошук очищено');
	});

	it('змінює масштаб шрифту в межах 75%-140%', () => {
		ctrl.changeFontScale(10);
		expect(ctrl.fontScale).toBe(110);

		ctrl.changeFontScale(50);
		expect(ctrl.fontScale).toBe(140); // clamp max

		ctrl.changeFontScale(-100);
		expect(ctrl.fontScale).toBe(75); // clamp min

		ctrl.resetFontScale();
		expect(ctrl.fontScale).toBe(100);
	});

	it('перемикає режим перегляду між слайдами та буклетом', () => {
		expect(ctrl.viewMode).toBe('slides');
		ctrl.toggleViewMode();
		expect(ctrl.viewMode).toBe('booklet');
		ctrl.toggleViewMode();
		expect(ctrl.viewMode).toBe('slides');
	});
});
