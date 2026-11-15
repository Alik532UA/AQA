# CI/CD on Windows Runners

> **Підтеми:** Вирішення проблеми Session 0, запуск тестів, фікстури та логи

**Категорія:** Senior AQA Consultant

---

## Головна пастка Windows CI: Session 0 Isolation

Найпоширеніша проблема, з якою стикаються команди на Windows CI — чорні скріншоти або раптове падіння GUI-тестів.

### Причина — Ізоляція Сесії 0:

Якщо агент CI (GitHub Runner / GitLab Runner / Jenkins Agent) встановлено як системну службу (Windows Service), він запускається в **Session 0**, де за замовчуванням *заблоковано графічний дисплей* (No Interactive Desktop).

### Інженерне рішення консультанта:

- **Interactive User Session:** налаштування агента для запуску під реальним користувачем з автоматичним входом у систему (Windows AutoLogon).

- **Віртуальний дисплей (Virtual Display Driver):** встановлення віртуального графічного драйвера для headless Windows VM.

- **PowerShell initialization:** автоматичне виставлення роздільної здатності дисплея перед запуском тестів (`Set-DisplayResolution -Width 1920 -Height 1080`).

---

## Фікстури, очищення та діагностичні артефакти

### Обов'язкові механізми у фреймворку:

**1. Надійний Teardown (Вбивство зомбі-процесів):** десктопні тести часто залишають фонові процеси. У фікстурах після кожного тесту додається гарантована зачистка: `taskkill /F /T /IM electron.exe` та очищення тимчасових lock-файлів.

**2. Ізоляція тестових профілів:** кожен прогін використовує чисту тимчасову директорію даних: `--user-data-dir=%TEMP%\test-profile-xxx`.

**3. Збір діагностики при збоях (Crash Diagnostics):**

- Playwright Traces (.zip) з таймлайном дій.

- Відеозапис вікна програми.

- Дамп Windows Event Viewer (Event ID 1000/1026: Application Error / .NET Runtime Error) для виявлення крашів.

---

[← Попередній: Multi-Monitor & DPI Matrix](./06_Multi-Monitor_and_DPI_Matrix.md) | [📑 До змісту](../README.md) | [Наступний: Architecture & Handover →](./08_Architecture_and_Handover.md)
