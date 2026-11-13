# Flutter Architecture & QA Specifics

> **Підтеми:** Особливості тестування Flutter: Dart VM, Impeller, Platform Channels

**Категорія:** Middle Flutter QA (Nayax)

---

## Архітектура Flutter: що обов'язково знати QA

Flutter не компілюється у нативні UI-компоненти платформи (як React Native), а **малює весь інтерфейс самостійно піксель-у-піксель** на полотні (Canvas) через власний графічний двигун (Impeller на iOS/сучасних Android або Skia).

### Три дерева Flutter (Three Trees):

**Widget Tree:** Незмінні конфігурації екрану (Blueprint). Легко створюються та перестворюються.

**Element Tree:** Скелет життєвого циклу. Пов'язує віджети з реальними об'єктами рендерингу, зберігає стан (State).

**RenderObject Tree:** Низькорівневе дерево розмірів, позиціонування (Layout) та малювання (Paint).

**Наслідки для тестування:** Для пошуку елементів у тестах та доступності (Accessibility) критично важливі `Key` (ValueKey, Key) та віджети `Semantics`.

---

## Специфічні Flutter-баги та зони ризику

### Типові вразливі місця Flutter додатків:

- **Platform Channels (MethodChannel / EventChannel):** Міст між Dart-кодом та нативною ОС (Kotlin/Java на Android, Swift/Obj-C на iOS). Саме тут виникають краші при роботі з Bluetooth (BLE сканування автоматів), камерою (сканер штрих-кодів), пушами або геолокацією.

- **Keyboard Overlap & Focus Issues:** Поведінка віртуальної клавіатури. Частий баг Flutter — клавіатура перекриває поле вводу (потрібен правильний `resizeToAvoidBottomInset` та віджети з скролом).

- **State Loss при Background Termination:** Коли ОС вбиває фоновий додаток для вивільнення пам'яті (Activity recreation). Необхідно тестувати State Restoration (чи не скидаються напівзаповнені інвентаризаційні форми).

- **JIT (Debug) vs AOT (Release) збірка:** У Debug-режимі Flutter працює через JIT з підтримкою Hot Reload. Release-білд скомпільований у AOT машинний код. *Тестувати перформанс та фінальну валідацію можна ТІЛЬКИ на Release або Profile білдах!*

**Золоте правило Flutter QA:** Якщо фіча використовує нативне залізо (Bluetooth/Камера/GPS) — тести обов'язкові окремо на реальному Android та окремо на реальному iOS!

---

---

[← Попередній: Nayax Domain & Vending CRM](./01_Nayax_Domain_and_Vending_CRM.md) | [📑 До змісту](../README.md) | [Наступний: Android Testing & Studio Toolset →](./03_Android_Testing_and_Studio_Toolset.md)
