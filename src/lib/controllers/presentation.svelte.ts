/**
 * Presentation Controller (Svelte 5 Runes)
 * Керує станом презентатора, фільтрацією, пошуком та доступністю (a11y).
 */
import { slidesData, type Slide } from '../data/slidesData.js';
import { storage } from '../services/storage.js';

export type CategoryKey = 'M' | 'A' | 'C' | 'F' | 'S';

export class PresentationController {
	activeCategory = $state<CategoryKey>('M');
	activeSlideId = $state<string>('m-basics');
	searchQuery = $state<string>('');
	showSearchResults = $state<boolean>(false);
	isMobileSidebarOpen = $state<boolean>(false);
	isSidebarCollapsed = $state<boolean>(false);
	isFullscreen = $state<boolean>(false);
	fontScale = $state<number>(100);
	viewMode = $state<'slides' | 'booklet'>('slides');
	announcement = $state<string>('Готово до перегляду шпаргалки');

	constructor() {
		this.initFromStorage();
	}

	private initFromStorage(): void {
		const savedCollapsed = storage.get('sidebar_collapsed');
		if (savedCollapsed !== null) {
			this.isSidebarCollapsed = savedCollapsed === 'true';
		}
		const savedScale = storage.get('font_scale');
		if (savedScale) {
			const num = parseInt(savedScale, 10);
			if (!isNaN(num) && num >= 70 && num <= 150) {
				this.fontScale = num;
			}
		}
		const savedCategory = storage.get('active_category');
		if (savedCategory && ['M', 'A', 'C', 'F', 'S'].includes(savedCategory)) {
			this.activeCategory = savedCategory as CategoryKey;
			const initialSlides = slidesData.filter((s) => s.category === this.activeCategory);
			if (initialSlides.length > 0) {
				this.activeSlideId = initialSlides[0].id;
			}
		}
	}

	get categorySlides(): Slide[] {
		return slidesData.filter((s) => s.category === this.activeCategory);
	}

	get currentSlide(): Slide {
		const found = slidesData.find((s) => s.id === this.activeSlideId);
		if (found) return found;
		return this.categorySlides[0] ?? slidesData[0];
	}

	get currentSlideIndex(): number {
		const idx = this.categorySlides.findIndex((s) => s.id === this.currentSlide.id);
		return idx >= 0 ? idx + 1 : 1;
	}

	get matchingSlides(): Slide[] {
		const q = this.searchQuery.toLowerCase().trim();
		if (!q) return [];
		return slidesData.filter((slide) => {
			const inTitle = slide.menuTitle.toLowerCase().includes(q);
			const inSub = slide.menuSub?.toLowerCase().includes(q) ?? false;
			const inCards = slide.cards.some((c) => {
				const inCardTitle = c.title?.toLowerCase().includes(q) ?? false;
				const inContent = c.contentHtml?.toLowerCase().includes(q) ?? false;
				return inCardTitle || inContent;
			});
			return inTitle || inSub || inCards;
		});
	}

	setCategory(cat: CategoryKey): void {
		this.activeCategory = cat;
		storage.set('active_category', cat);
		const slides = slidesData.filter((s) => s.category === cat);
		if (slides.length > 0) {
			this.activeSlideId = slides[0].id;
			this.announcement = `Обрано категорію: ${cat}, відкрито слайд: ${slides[0].menuTitle}`;
		}
	}

	selectSlide(id: string): void {
		const slide = slidesData.find((s) => s.id === id);
		if (slide) {
			this.activeCategory = slide.category;
			this.activeSlideId = slide.id;
			storage.set('active_category', slide.category);
			this.announcement = `Слайд: ${slide.menuTitle} (${this.currentSlideIndex} з ${this.categorySlides.length})`;
		}
	}

	goToNextSlide(): void {
		const slides = this.categorySlides;
		const idx = slides.findIndex((s) => s.id === this.currentSlide.id);
		if (idx >= 0 && idx < slides.length - 1) {
			this.activeSlideId = slides[idx + 1].id;
		} else if (idx === slides.length - 1) {
			this.activeSlideId = slides[0].id;
		}
		this.announcement = `Слайд: ${this.currentSlide.menuTitle} (${this.currentSlideIndex} з ${slides.length})`;
	}

	goToPrevSlide(): void {
		const slides = this.categorySlides;
		const idx = slides.findIndex((s) => s.id === this.currentSlide.id);
		if (idx > 0) {
			this.activeSlideId = slides[idx - 1].id;
		} else if (idx === 0) {
			this.activeSlideId = slides[slides.length - 1].id;
		}
		this.announcement = `Слайд: ${this.currentSlide.menuTitle} (${this.currentSlideIndex} з ${slides.length})`;
	}

	setSearch(query: string): void {
		this.searchQuery = query;
		if (query.trim()) {
			this.showSearchResults = true;
			const count = this.matchingSlides.length;
			this.announcement = `Знайдено ${count} слайдів за запитом "${query}"`;
		} else {
			this.showSearchResults = false;
		}
	}

	clearSearch(): void {
		this.searchQuery = '';
		this.showSearchResults = false;
		this.announcement = 'Пошук очищено';
	}

	toggleSidebarCollapse(): void {
		this.isSidebarCollapsed = !this.isSidebarCollapsed;
		storage.set('sidebar_collapsed', String(this.isSidebarCollapsed));
	}

	changeFontScale(delta: number): void {
		const newScale = Math.min(140, Math.max(75, this.fontScale + delta));
		this.fontScale = newScale;
		storage.set('font_scale', String(this.fontScale));
		this.announcement = `Масштаб шрифту: ${this.fontScale}%`;
	}

	resetFontScale(): void {
		this.fontScale = 100;
		storage.set('font_scale', '100');
		this.announcement = 'Масштаб шрифту скинуто до 100%';
	}

	toggleViewMode(): void {
		this.viewMode = this.viewMode === 'slides' ? 'booklet' : 'slides';
		this.announcement =
			this.viewMode === 'booklet' ? 'Режим конспекту для друку' : 'Режим презентатора';
	}
}

export const presentation = new PresentationController();
