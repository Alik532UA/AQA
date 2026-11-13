# QA Process: Jira, Xray & Git

> **Підтеми:** Управління тестуванням в Xray, JQL фільтри та Git для QA

**Категорія:** Middle Flutter QA (Nayax)

---

## Xray Test Management & Робота з Jira (JQL)

**Xray** — провідна Test Management System (TMS), що вбудована безпосередньо в Jira як набір спеціальних типів задач.

### Ієрархія сутностей Xray:

**Test:** окремий тест-кейс (Manual: Preconditions, Steps, Expected Result).

**Test Set:** логічна група тестів (наприклад, регрес залишків, аудит готівки).

**Test Execution:** конкретний прогін тестів на білді/платформі (Status: PASS, FAIL, BLOCKED, EXECUTING).

**Test Plan:** консолідований план релізу, що відстежує загальне покриття вимог (Traceability).

### Приклади практичного JQL:

project = NAYAX AND issuetype = Bug AND status in ("Open", "In Progress") AND priority in (High, Blocker) AND affectedVersion = "2.4.0" ORDER BY created DESC

---

## Стандарт мобільного баг-репорту & Базовий Git

### Золотий стандарт Mobile Bug Report:

- **Title:** [Android 14][BLE] Не підключається до VPOS терміналу після виходу з фону.

- **Environment:** Модель (Samsung S23), Версія ОС (Android 14), Білд (v2.4.1-b42), Network (LTE).

- **Preconditions, Steps to reproduce, Expected vs Actual Result.**

- **Обов'язкові attachments:** Відеозапис екрану (з увімкненим відображенням тачів у Developer Options), витяг з `adb logcat` або iOS crash log.

### Базові команди Git у роботі QA:

git fetch && git checkout feature/nayax-vending-scan

git pull origin main // оновити гілку свіжим кодом

git status // перевірити змінені файли

git diff // подивитися зміни коду розробника для оцінки зони впливу

git stash / git stash pop // відкласти локальні правки

---

---

[← Попередній: Mobile Test Design & Matrix](./06_Mobile_Test_Design_and_Matrix.md) | [📑 До змісту](../README.md) | [Наступний: Performance Testing & Profiling →](./08_Performance_Testing_and_Profiling.md)
