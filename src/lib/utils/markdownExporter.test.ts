import { describe, it, expect } from 'vitest';
import { slideToMarkdown } from './markdownExporter.js';
import type { Slide } from '../data/slidesData.js';

describe('Markdown Exporter Utility', () => {
	const mockSlide: Slide = {
		id: 'test-slide',
		category: 'S',
		menuTitle: 'Тестовий заголовок',
		menuSub: 'Тестовий підзаголовок',
		layout: 'grid-2',
		cards: [
			{
				title: 'Картка 1',
				contentHtml:
					'<p>Параграф тексту &#123; name &#125;</p><ul><li>Пункт 1</li><li>Пункт 2</li></ul>'
			},
			{
				title: 'Картка 2',
				contentHtml: `
					<table>
						<thead>
							<tr><th>Параметр</th><th>Значення</th></tr>
						</thead>
						<tbody>
							<tr><td>Stack</td><td>Value Type</td></tr>
						</tbody>
					</table>
					<pre><code class="language-csharp">var x = 10;</code></pre>
				`
			}
		]
	};

	it('генерує валідний Markdown із заголовками та метаданими', () => {
		const md = slideToMarkdown(mockSlide);
		expect(md).toContain('# Тестовий заголовок');
		expect(md).toContain('Тестовий підзаголовок');
		expect(md).toContain('## Картка 1');
		expect(md).toContain('## Картка 2');
		expect(md).toContain('**Категорія:** C# Core & Advanced (.NET)');
	});

	it('коректно конвертує списки та параграфи в Markdown синтаксис', () => {
		const md = slideToMarkdown(mockSlide);
		expect(md).toContain('- Пункт 1');
		expect(md).toContain('- Пункт 2');
		expect(md).toContain('{ name }');
	});

	it('коректно перетворює HTML таблиці на Markdown таблиці та підставляє csharp у блоки коду', () => {
		const md = slideToMarkdown(mockSlide);
		expect(md).toContain('| Параметр | Значення |');
		expect(md).toContain('| :--- | :--- |');
		expect(md).toContain('| Stack | Value Type |');
		expect(md).toContain('```csharp');
	});
});
