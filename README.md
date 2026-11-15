# AQA Interview Dashboard & Presentation Platform

> Інтерактивний веб-дашборд, база знань та презентаційна шпаргалка для підготовки до технічних співбесід за напрямками QA (Manual QA, Test Automation .NET, Senior Consultant, Flutter/Mobile QA).

---

## 🚀 Стек технологій

- **Frontend**: [SvelteKit 3](https://svelte.dev/) + [Svelte 5](https://svelte.dev/docs/svelte/overview) (виключно Runes)
- **Стилізація**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Типізація**: TypeScript 6 (`strict: true`)
- **Іконки**: `@lucide/svelte`
- **Тестування**: [Vitest](https://vitest.dev/)
- **Якість коду**: ESLint 10 + Prettier 3
- **Збірка**: `@sveltejs/adapter-static` (Single Page Application для GitHub Pages)

---

## 📂 Категорії підготовки

- **`M` — Manual QA**: теорія тестування, STLC, тест-дизайн, валідація vs верифікація, чек-листи, баг-репорти.
- **`A` — Automation QA (.NET / C#)**: архітектура фреймворків, Page Object, Factory, SOLID, CI/CD, SQL.
- **`C` — Senior Consultant**: 4-тижнева стратегія консалтингу, демаркація Playwright vs FlaUI, тестування апдейтів (MSI/NSIS), Session 0 bypass.
- **`F` — Middle Flutter QA (Nayax Retail)**: MDB/DEX вендингова телеметрія, архітектура Flutter, ADB/Logcat, iOS logs, Charles Proxy / SSL Pinning.

---

## 🛠 Команди розробника

```bash
# Встановлення залежностей
npm install

# Запуск локального dev-сервера
npm run dev

# Перевірка типів
npm run check

# Перевірка стилю та форматування
npm run lint

# Автоматичне виправлення форматування
npm run format

# Запуск тестів
npm test

# Перевірка безпеки залежностей
npm run audit:ci

# Збірка релізного SPA-пакета
npm run build

# Експорт усіх слайдів у Markdown
npm run export:slides
```

---

## 🛡 Безпека та надійність

- Повне екранування тексту `escapeHtml()` у пошуковій підсвітці карток (`Card.svelte`) для захисту від XSS.
- Content-Security-Policy (CSP) директиви у `src/app.html`.
- Межа помилок `<svelte:boundary>` для захисту інтерфейсу від збоїв рендерингу.
