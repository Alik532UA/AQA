export interface SlideCard {
	title?: string;
	contentHtml?: string;
	colSpan?: number; // 1, 2, or 3
}

export interface Slide {
	id: string;
	category: 'M' | 'A' | 'C' | 'F' | 'S';
	menuGroup?: string;
	menuTitle: string;
	menuSub?: string;
	pillExtra?: {
		id: string;
		label: string;
	};
	layout: 'grid-3' | 'grid-2' | 'grid-1' | 'custom-m1' | 'custom-m3' | 'custom-m4' | 'custom-solid';
	cards: SlideCard[];
}

import { manualSlides } from './categories/manual.ts';
import { automationSlides } from './categories/automation.ts';
import { consultantSlides } from './categories/consultant.ts';
import { flutterSlides } from './categories/flutter.ts';
import { csharpSlides } from './categories/csharp.ts';

export { manualSlides, automationSlides, consultantSlides, flutterSlides, csharpSlides };

export const slidesData: Slide[] = [
	...manualSlides,
	...automationSlides,
	...consultantSlides,
	...flutterSlides,
	...csharpSlides
];
