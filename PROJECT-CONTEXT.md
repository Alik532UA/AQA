---
Назва: Контекст проєкту AQA — QA Interview Dashboard & Presentation Platform
Канон: selection_criteria/v10 та product_criteria/v10
Дата оновлення: 2026-11-15
---

# Контекст проєкту: AQA Interview Dashboard & Presentation Platform

## 0. AI Executive Summary & Швидкий індекс навігації

> [!NOTE]
> Цей документ є архітектурним компасом та єдиним джерелом правди (Single Source of Truth) для розробників та автономних AI-агентів у проєкті AQA.

| Параметр / Інваріант     | Значення                                                                                       | Локація у коді / Примітка                  |
| :----------------------- | :--------------------------------------------------------------------------------------------- | :----------------------------------------- |
| **Стек**                 | SvelteKit 3 + Svelte 5 (Runes) + Tailwind CSS 4 + TypeScript 6                                 | `package.json`, `src/routes/layout.css`    |
| **Хостинг та деплой**    | GitHub Pages (`adapter-static`), fallback: `404.html`                                          | `vite.config.ts`, `.github/workflows/`     |
| **Імпорти модулів**      | Subpath-імпорти: `#lib/*` (сумісність із `$lib/*`)                                             | `package.json` (`imports`), `tsconfig`     |
| **Категорії матеріалів** | 5 модульних розділів: `manual.ts`, `automation.ts`, `consultant.ts`, `flutter.ts`, `csharp.ts` | `src/lib/data/categories/`                 |
| **Експорт слайдів**      | Markdown генератор для конспекту та друку                                                      | `scripts/export_all_slides.js`             |
| **Безпека XSS**          | Суворе HTML-екранування перед підсвіткою пошуку                                                | `src/lib/components/Card.svelte`           |
| **Політика CSP**         | Мета-директива Content-Security-Policy                                                         | `src/app.html`, `src/security.test.ts`     |
| **Error Boundary**       | `<svelte:boundary>` + `ErrorFallback.svelte` + `hooks.client.ts`                               | `src/routes/+layout.svelte`                |
| **Контроль якості**      | 14 Vitest тестів + Playwright E2E + @axe-core/playwright WCAG 2.2 AA                           | `eslint.config.js`, `playwright.config.ts` |

---

## 1. Призначення та бізнес-місія проєкту

- **Продукт**: Інтерактивний дашборд-презентатор та конспект для підготовки до технічних співбесід за напрямками QA (Quality Assurance) та Test Automation.
- **Цільова аудиторія**: QA інженери, ліди та кандидати, яким потрібна структурована шпаргалка для повторення теорії, архітектурних патернів, CI/CD практик та відповідей на типові технічні запитання на співбесідах.
- **Формати використання**:
  1. Інтерактивний веб-екран із повнотекстовим пошуком, фільтрацією за тегами та шорткатами масштабування.
  2. Режим буклету для друку / PDF (`PrintBooklet.svelte`).
  3. Автоматичний експорт у Markdown-документи (`slides-md/`) для читання в Obsidian або офлайн-нотатках.

---

## 2. Структура категорій та модель даних

### 2.1 Категорії підготовки:

1. **`M` — Manual QA (Теорія тестування)**: STLC, рівні/типи тестування, тест-дизайн (еквівалентні класи, граничні значення, pairwise), валідація vs верифікація, чек-листи, баг-репорти, Severity vs Priority.
2. **`A` — Automation QA (.NET / C#)**: Архітектура тестових фреймворків, Page Object, Factory, SOLID, CI/CD пайплайни, SQL, Git branching, тестові піраміди.
3. **`C` — Senior AQA Consultant (Desktop / Electron / Windows)**: 4-тижнева стратегія консалтингу, демаркація Playwright vs FlaUI, тестування апдейтів (MSI/NSIS), системний трей, Session 0 bypass у Windows CI, ADR.
4. **`F` — Middle Manual QA (Flutter / Nayax Retail Team)**: Вендингова телеметрія MDB/DEX, архітектура Flutter (Dart, Impeller, Platform Channels), Android Studio/ADB, iOS Xcode Console / crash logs, Charles Proxy / SSL Pinning, Jira/Xray процеси.
5. **`S` — C# Core & Advanced (.NET / OOP / LINQ / Async)**: CTS типи даних, Value vs Reference, пам'ять Stack/Heap, ref/out/in, Nullable, OOP (модифікатори, інкапсуляція, конструктори, static, const/readonly, наслідування, virtual/override, abstract/interface), Generics, делегати/Func/Action/event, колекції, try-when, LINQ Left Join, async/await, IDisposable, Reflection для NUnit/xUnit.

### 2.2 Модель слайда (`Slide` у `src/lib/data/slidesData.ts`):

- `id`: унікальний ідентифікатор слайда (`m-basics`, `a-cicd`, тощо).
- `category`: `'M' | 'A' | 'C' | 'F' | 'S'`.
- `menuTitle`: заголовок у бічному меню навігації.
- `menuSub`: короткий опис підтем для пошуку.
- `layout`: тип сітки (`'grid-1'`, `'grid-2'`, `'grid-3'`, `'custom-*'`).
- `cards`: масив карток із вмістом (`title`, `contentHtml`, `points`, `concepts`, `codeSnippet`, `interviewTip`, `tags`).

---

## 3. Безпека (SECURITY-v10)

1. **Захист від XSS при підсвітці пошуку**:
   - Функція `escapeHtml()` у `src/lib/components/Card.svelte` повністю екранує символи `&`, `<`, `>`, `"`, `'` перед підстановкою тегів `<mark>` підсвічування.
   - Заборонено вставляти сирий користувацький ввід у `{@html}` без санітизації. Інваріант контролюється тестом `src/security.test.ts`.
2. **Content-Security-Policy (CSP)**:
   - У `src/app.html` налаштовано сувору директиву CSP, що блокує несанкціоновані зовнішні скрипти, підключення та фрейми.
3. **Заборона небезпечних викликів**:
   - Статичний тест перевіряє повну відсутність викликів `eval()`, `new Function()` та `document.write()` у вихідному коді проєкту.

---

## 4. Обробка помилок та стійкість (ERROR-HANDLING-v10)

- **Межа помилок (`<svelte:boundary>`)**: Усі слайди та компоненти у `src/routes/+layout.svelte` огорнуті в `<svelte:boundary>`, що запобігає білому екрану смерті при збоях рендерингу складного HTML.
- **Резервний компонент (`ErrorFallback.svelte`)**: Дозволяє миттєво перезапустити рендеринг слайда однією кнопкою.
- **Сторінка помилок (`src/routes/+error.svelte`)**: Фірмовий неоновий екран зі статусом помилки та поверненням до дашборду.
- **Клієнтський перехоплювач (`src/hooks.client.ts`)**: Автоматично вирішує проблему застарілих чанків збірки після нового деплою.

---

## 5. Матриця перевірок якості коду (CODE-QUALITY-v10)

| Команда                 | Опис перевірки                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------- |
| `npm run check`         | Сувора перевірка типів TypeScript та синтаксису SvelteKit                               |
| `npm run lint`          | Перевірка стилю коду ESLint 10 та форматування Prettier 3                               |
| `npm run format`        | Автоматичне виправлення форматування коду                                               |
| `npm test`              | Запуск комплексу тестів Vitest (`security`, `categories`, `slides`, `markdownExporter`) |
| `npm run test:e2e`      | Запуск Playwright E2E та валідація доступності @axe-core/playwright                     |
| `npm run bump`          | Автоматичний ESM бамп patch-версії та синхронізація артефактів                          |
| `npm run audit:ci`      | Аудит безпеки npm-залежностей на high/critical вразливості                              |
| `npm run build`         | Збірка статичного релізного SPA-пакета у папку `build/`                                 |
| `npm run export:slides` | Генерація Markdown-конспекту в папку `slides-md/`                                       |
