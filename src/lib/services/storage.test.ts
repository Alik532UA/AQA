// @vitest-environment node
import { describe, it, expect, beforeEach } from 'vitest';
import { storage, STORAGE_PREFIX } from './storage.js';

describe('Safe Storage Facade (STORAGE-NAMESPACE-v10)', () => {
	const mockStore: Record<string, string> = {};

	beforeEach(() => {
		for (const key of Object.keys(mockStore)) {
			delete mockStore[key];
		}
		// Mock window and localStorage
		(globalThis as unknown as { window: unknown }).window = {
			localStorage: {
				getItem: (key: string) => mockStore[key] ?? null,
				setItem: (key: string, val: string) => {
					mockStore[key] = val;
				},
				removeItem: (key: string) => {
					delete mockStore[key];
				},
				get length() {
					return Object.keys(mockStore).length;
				},
				key: (i: number) => Object.keys(mockStore)[i] ?? null
			},
			sessionStorage: {
				getItem: () => null,
				setItem: () => {},
				removeItem: () => {},
				length: 0,
				key: () => null
			}
		};
	});

	it('префікс сховища є унікальним і закінчується на підкреслення', () => {
		expect(STORAGE_PREFIX).toBe('aqa_');
		expect(STORAGE_PREFIX.endsWith('_')).toBe(true);
	});

	it('записує та зчитує ключі виключно з префіксом aqa_', () => {
		storage.set('active_category', 'automation');
		expect(mockStore['aqa_active_category']).toBe('automation');
		expect(storage.get('active_category')).toBe('automation');
	});

	it('серіалізує та десеріалізує JSON обʼєкти з безпечним fallback', () => {
		storage.setJSON('settings', { zoom: 1.2 });
		expect(storage.getJSON('settings', { zoom: 1.0 })).toEqual({ zoom: 1.2 });
		expect(storage.getJSON('unknown_key', { fallback: true })).toEqual({ fallback: true });
	});

	it('clear() очищує лише ключі з власним префіксом, не чіпаючи чужі', () => {
		mockStore['foreign_app_key'] = 'secret';
		storage.set('my_pref', 'dark');

		storage.clear();

		expect(mockStore['aqa_my_pref']).toBeUndefined();
		expect(mockStore['foreign_app_key']).toBe('secret');
	});
});
