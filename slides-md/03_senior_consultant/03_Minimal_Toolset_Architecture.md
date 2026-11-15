# Minimal Toolset Architecture

> **Підтеми:** Мінімальний набір інструментів: Playwright TS + C#/.NET FlaUI

**Категорія:** Senior AQA Consultant

---

## Принцип «Smallest Suitable Toolset»

Консультант повинен запобігти переускладненню (Over-engineering). Замість «зоопарку» з 4-5 різних бібліотек вибудовується двокомпонентне ядро:

**Компонент 1: Playwright + TypeScript (Electron UI)**

- Покриває 85-90% регресійних тестів інтерфейсу мерчанта.

- Найшвидший запуск, підтримка параллелізму, headless/headed режим.

- Єдина екосистема з фронтенд-розробниками (TypeScript, NPM).

**Компонент 2: C# / .NET + FlaUI (Native Windows)**

- Покриває 10-15% системних перевірок (інсталятори, трей, оновлення, служби).

- Прямий доступ до Windows UI Automation (UIA3) та Win32 API.

- Нативна інтеграція з .NET стеком бекенду додатку.

Цей набір забезпечує 100% покриття без зайвих залежностей та конфліктів.

---

## Чому FlaUI замість WinAppDriver або Appium?

| Критерій | WinAppDriver | FlaUI (.NET) |
| :--- | :--- | :--- |
| Стан проекту | Практично закинутий MS | Активний Open-Source |
| Windows 11 & DPI | Часті збої координат | Повна нативна сумісність |
| Архітектура | Вимагає фоновий exe-сервер | Пряма C# DLL бібліотека |
| Швидкодія | HTTP WebDriver overhead | Миттєві прямі COM-виклики |
| Події Windows | Обмежені | UIA3 Automation Events |

**Експертний висновок для ліда:** WinAppDriver додає нестабільність і зайвий шар абстракції. FlaUI дозволяє писати надійні C# тести для Windows без сторонніх серверів.

---

[← Попередній: Electron vs Native Windows](./02_Electron_vs_Native_Windows.md) | [📑 До змісту](../README.md) | [Наступний: Visual Regression & OCR →](./04_Visual_Regression_and_OCR.md)
