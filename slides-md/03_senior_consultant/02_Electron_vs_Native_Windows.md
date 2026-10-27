# Electron vs Native Windows

> **Підтеми:** Демаркація меж Playwright vs нативні Windows інструменти

**Категорія:** Senior AQA Consultant

---

## Можливості та межі Playwright в Electron

Playwright підтримує Electron з коробки через експериментальний модуль `_electron.launch({ args: ['main.js'] })`, керуючи Chromium рендерером через Chrome DevTools Protocol (CDP).

### Що Playwright робить ІДЕАЛЬНО (Швидко & Стабільно):

- **Веб-інтерфейс у вікні Electron:** повний доступ до DOM-дерева, компонентів React/Vue, форм введення даних мерчанта.

- **Швидкі локатори та auto-waiting:** усуває необхідність у ручних очікуваннях.

- **Мокування бекенду:** підміна мережевих запитів через `page.route()` для ізольованого тестування UI.

- **Емуляція IPC повідомлень:** перехоплення та виклик методів `ipcRenderer` / `ipcMain` безпосередньо в рантаймі.

- **Вбудовані артефакти:** автоматичний запис Playwright Trace Viewer, скріншотів та відео.

Playwright покриває до 85-90% бізнес-сценаріїв мерчант-додатку з максимальною швидкістю виконання.

---

## Коли потрібні нативні Windows інструменти (.NET / FlaUI)

### Що Playwright ПРИНЦИПОВО НЕ МОЖЕ протестувати:

**1. Системний трей (System Tray / Notification Area):** меню правої кнопки миші біля годинника Windows, запуск додатку згорнутим у трей.

**2. Нативні діалоги Win32 / Common Dialogs:** системні вікна Open File / Save File, вікна вибору сертифікатів, запити UAC (User Account Control).

**3. Windows Services & Background Updaters:** фонові процеси оновлення, демони, зв'язок через Named Pipes та локальні сокети.

**4. Інсталяція, оновлення та реєстр:** запуск MSI/InnoSetup інсталяторів, перевірка автозапуску в реєстрі (HKLM/HKCU).

**5. Взаємодія зі стороннім софтом:** POS-термінали, касові драйвери або legacy Win32/WPF вікна без доступу до Chromium.

**Правило демаркації:** Все, що знаходиться всередині Chromium вікна Electron — тестується Playwright (TS). Все, що стосується ОС Windows, трею, інсталяторів та процесів — тестується через C# / .NET (FlaUI, System.Management, Registry).

---

---

[← Попередній: Consulting Strategy & PoC](./01_Consulting_Strategy_and_PoC.md) | [📑 До змісту](../README.md) | [Наступний: Minimal Toolset Architecture →](./03_Minimal_Toolset_Architecture.md)
