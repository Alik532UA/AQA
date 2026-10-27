export type QACategory = 'all' | 'manual' | 'automation';

export interface KeyConceptItem {
	title: string;
	desc: string;
	badge?: string;
	subitems?: string[];
}

export interface QACard {
	id: string;
	category: 'manual' | 'automation';
	section: string;
	title: string;
	subtitle?: string;
	summary: string;
	tags: string[];
	points?: string[];
	concepts?: KeyConceptItem[];
	codeSnippet?: {
		language: string;
		code: string;
		caption?: string;
	};
	interviewTip?: string;
	isFavorite?: boolean;
}
