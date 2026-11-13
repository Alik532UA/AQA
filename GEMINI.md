# QA Interview Dashboard & Cheat Sheet (Project Knowledge Base)

## 📌 Ціль та призначення проєкту
Цей репозиторій — **інтерактивна шпаргалка та презентаційний дашборд для підготовки до технічних співбесід QA**.
Він створений для швидкого повторення матеріалів, структурованого вивчення тем та демонстрації знань на співбесідах.

Проєкт не змінює існуючі розділи під час додавання нових — **кожна вакансія/напрямок додається як окрема категорія (розділ)**.

---

## 🛠 Технологічний стек
- **Frontend:** Svelte 5 (runes `$state`, `$derived`), SvelteKit, TypeScript
- **Стилізація:** Tailwind CSS 4
- **Іконки:** `@lucide/svelte`
- **Експорт:** Генератор слайдів у Markdown (`scripts/export_all_slides.js`)

---

## 📂 Структура категорій (Розділи підготовки)

1. **`M` — Manual QA (Теорія тестування):**
   - Основи тестування, STLC, цілі, рівні, типи тестування, верифікація/валідація, тест-дизайн, чек-листи, баг-репорти, Severity vs Priority.
2. **`A` — Automation QA (.NET / C#):**
   - CI/CD практики, принципи проектування, тестові фреймворки, патерни автоматизації (Page Object, Factory тощо), інфраструктура, VCS Git, сховища даних, SQL, SOLID.
3. **`C` — Senior AQA Consultant (Desktop / Electron / Windows):**
   - 4-тижнева стратегія консалтингу, демаркація Playwright vs FlaUI (.NET), тестування апдейтів (MSI/NSIS), системний трей, візуальна регресія та OCR, multi-monitor / DPI матриця, Windows CI (Session 0 bypass), Architecture Decision Records (ADR), топ Q&A.
4. **`F` — Middle Manual QA Engineer (Flutter team — Nayax Retail):**
   - Домен вендингу та безготівкових платежів Nayax (MDB/DEX телеметрія, залишки, інкасація, помилки), архітектура Flutter (Dart, Impeller, Platform Channels), Android Studio (Logcat, ADB команди, емулятори), iOS (Xcode Console, crash logs .ips, TestFlight, сертифікати), Client-Server & API (Swagger, Postman, Charles Proxy, SSL Pinning), тест-матриця та мобільні чек-листи, процеси QA (Jira JQL, Xray Test Management, Git), клієнтський перформанс та API навантаження, готові відповіді на топ Q&A співбесіди.

---

## 🏗 Ключові файли та де що знаходиться

- `src/lib/data/slidesData.ts` — **Головне джерело даних**. Масив об'єктів `slidesData`, де кожен слайд має:
  - `id`: унікальний ідентифікатор (наприклад, `m-basics`, `a-cicd`, `c-strategy`, `f-vending-crm`).
  - `category`: код категорії (`'M' | 'A' | 'C' | 'F'`).
  - `menuTitle`: назва у бічному меню.
  - `menuSub`: короткий опис підзаголовка.
  - `layout`: тип розмітки (`'grid-2'`, `'grid-3'` тощо).
  - `cards`: картки з заголовками та `contentHtml`.
- `src/lib/components/Sidebar.svelte` — бічна навігація з круглими табами-перемикачами категорій (`M`, `A`, `C`, `F`) та списком слайдів активної категорії.
- `src/routes/+page.svelte` — головна сторінка додатку (пошук, перегляд слайдів, гарячі клавіші, масштаб).
- `src/lib/components/PrintBooklet.svelte` — режим буклету для друку / PDF.
- `src/lib/utils/markdownExporter.ts` — утиліта форматування слайда в Markdown.
- `scripts/export_all_slides.js` — скрипт експорту всіх слайдів у папку `slides-md/`.
- `slides-md/` — сгенеровані Markdown-файли за розділами (`01_manual_qa`, `02_automation_qa`, `03_senior_consultant`, `04_flutter_nayax_qa`).

---

## ⚡ Як додавати нову вакансію або розділ:
1. **НЕ ЗМІНЮВАТИ існуючі слайди та категорії!**
2. Додати новий символ категорії в тип: `category: 'M' | 'A' | 'C' | 'F' | ...`.
3. Додати слайди в кінець `slidesData.ts`.
4. Додати кнопку та навігаційні пункти в `Sidebar.svelte`.
5. Оновити `+page.svelte`, `PrintBooklet.svelte`, `markdownExporter.ts`.
6. Оновити конфіг `CATEGORIES` у `scripts/export_all_slides.js` та запустити `node ./scripts/export_all_slides.js`.
7. Запустити `npm run check`, щоб переконатися у відсутності помилок типів.

