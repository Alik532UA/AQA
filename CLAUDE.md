# CLAUDE.md — AQA Interview Dashboard

## Команди перевірки та збірки

- `npm run check` — перевірка типів TypeScript та синтаксису Svelte
- `npm run lint` — перевірка лінтером ESLint та форматуванням Prettier
- `npm run format` — автоформатування коду
- `npm test` — запуск юніт-тестів Vitest
- `npm run build` — збірка статичного SPA
- `npm run export:slides` — оновлення експорту Markdown слайдів у `slides-md/`

## Головні інваріанти

- Svelte 5 з рунами (`$state`, `$derived`, `$props`).
- Безпека: функція `escapeHtml()` при виведенні тексту через `{@html}` у `Card.svelte`.
- Tailwind CSS 4 через `@tailwindcss/vite`.
