# Visual Regression & OCR

> **Підтеми:** Тестування скріншотами, OCR та комп'ютерний зір

**Категорія:** Senior AQA Consultant

---

## Скріншотні перевірки та OCR у закритих середовищах

У додатках для мерчантів часто виникають сценарії, де Accessibility дерево недоступне: фіскальні чеки, графічні канваси, POS-екрани або сторонні плагіни.

### Методи тестування:

**1. Screenshot Comparison (Playwright):**
`expect(page).toHaveScreenshot('receipt.png', { maxDiffPixelRatio: 0.02 })`. Порівняння рендерингу з еталоном піксель-у-піксель.

**2. Optical Character Recognition (OCR — Tesseract):**
Вичитування динамічного тексту (сум платежів, номерів замовлень, статусів) з графічних областей через `Tesseract.js` або `Tesseract .NET`.

**3. Template Matching (OpenCV / Emgu CV):**
Знаходження іконок статусу, логотипів банків чи кнопок на екрані за зразком зображення, коли немає локаторів.

---

## Підводні камені візуальних тестів та методи боротьби

### Головні причини хибних спрацьовувань (Flakiness):

- **Динамічні дані:** дати, час, секунди, номери сесій, миготливий текстовий курсор.

- **Антиаліасинг та субпіксельний рендеринг:** різниця рендерингу шрифтів на різних відеокартах або версіях Windows (ClearType).

- **DPI масштабування:** запуск на 100% vs 125% дає повністю різні скріншоти.

### Інженерні рішення консультанта:

• **Masking:** маскування динамічних зон: `toHaveScreenshot({ mask: [page.locator('.timestamp')] })`.

• **Freeze Timers:** фіксація системного часу через `page.clock.setFixedTime()`.

• **Disable CSS Animations:** автоматичне відключення CSS перевантажень та переходів перед знімком.

• **CI Strict Resolution:** фіксований віртуальний екран 1920x1080x32 у Windows CI.

---

---

[← Попередній: Minimal Toolset Architecture](./03_Minimal_Toolset_Architecture.md) | [📑 До змісту](../README.md) | [Наступний: Upgrades, Installers & Services →](./05_Upgrades_Installers_and_Services.md)
