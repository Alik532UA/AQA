# Android Testing & Studio Toolset

> **Підтеми:** Android Studio, Logcat, ADB команди та емулятори

**Категорія:** Middle Flutter QA (Nayax)

---

## Android Studio: Logcat, креші та діагностика

**Android Studio** — основний інструмент ручного тестувальника для локалізації дефектів на Android-платформі.

### Майстерність роботи з Logcat:

- **Фільтри пошуку:** фільтрація за назвою пакету (`package:com.nayax.retail`), тегом (`tag:flutter`, `tag:HttpLogging`) та рівнем логування.

- **Рівні логів:** `Verbose` (V) → `Debug` (D) → `Info` (I) → `Warn` (W) → `Error` (E) → `Assert` (A).

- **Пошук крешів:** ключові запити `fatal exception`, `AndroidRuntime`, `OutOfMemoryError`. Лог містить точний Stack Trace з рядком помилки у Flutter Dart файлі.

- **ANR (Application Not Responding):** виникає, коли UI-потік заблокований довше 5 секунд. Зняття трасування з `/data/anr/traces.txt`.

**Device File Explorer:** дозволяє переглядати локальну файлову систему додатку (SQLite бази, Hive сховища, SharedPreferences, кешовані фотографії поломок апаратів).

---

## Практичні команди ADB (Android Debug Bridge)

### Топ-команд ADB для щоденної роботи QA:

adb devices // список підключених девайсів/емуляторів

adb install -r app-release.apk // перевстановлення зі збереженням даних

adb install -d app-v1.apk // встановлення з пониженням версії (downgrade)

adb logcat -c && adb logcat > crash.log // очистити буфер і зберегти лог

adb shell pm clear com.nayax.retail // очистити кеш та дані додатку

adb shell am kill com.nayax.retail // симуляція примусового вбивства процесу ОС

adb shell monkey -p com.nayax.retail -v 500 // стрес-тест хаотичними тапами

**Емулятори vs Реальні девайси:** Емулятор (AVD) зручний для перевірки версток на різних розмірах екранів. Реальний девайс обов'язковий для тестування BLE зв'язку з вендингом, камери сканера та біометрії.

---

---

[← Попередній: Flutter Architecture & QA Specifics](./02_Flutter_Architecture_and_QA_Specifics.md) | [📑 До змісту](../README.md) | [Наступний: iOS Testing & Xcode Toolset →](./04_iOS_Testing_and_Xcode_Toolset.md)
