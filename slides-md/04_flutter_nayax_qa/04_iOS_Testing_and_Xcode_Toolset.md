# iOS Testing & Xcode Toolset

> **Підтеми:** Xcode Console, Devices & Simulators, TestFlight, Crash Logs

**Категорія:** Middle Flutter QA (Nayax)

---

## Xcode: Console, Devices & Символікація Crash Logs

На відміну від Android, iOS має закриту екосистему та жорсткі пісочниці безпеки (Sandboxing). Для тестування iOS додатків використовується стек **Xcode та TestFlight**.

### Робота з Xcode Devices & Simulators:

- **Devices and Simulators (Window -> Devices):** відображає підключені iPhone, дозволяє встановлювати `.ipa` перетягуванням та відкривати живий системний журнал (**Open Console**).

- **Зняття Crash Report (.ips / .crash):** На iPhone: *Settings → Privacy & Security → Analytics & Improvements → Analytics Data*. Знаходимо файл за назвою додатку та часом падіння.

- **Символікація (Symbolication):** Перетворення адрес пам'яті (наприклад, `0x00000001004a...`) у зрозумілі назви Dart/Flutter методів та номери рядків. Виконується в Xcode за допомогою `dSYM` файлів відповідного білда.

---

## Apple екосистема: TestFlight, сертифікати та профілі

### Дистрибуція білдів та види тестування:

**TestFlight Internal vs External:**
*Internal:* доступний команді Nayax одразу після обробки білда (до 100 тестувальників). *External:* вимагає проходження базового Beta App Review від Apple (до 10,000 зовнішніх тестувальників). Термін життя білда — 90 днів.

**Provisioning Profiles & Certificates:**
*Development* (для дебагу), *Ad-Hoc* (прив'язка до UDID девайсів), *Distribution* (TestFlight / App Store). Частий баг: білд не запускається або видає "Untrusted Enterprise Developer".

**Обмеження iOS Simulator:** Симулятор працює на архітектурі Mac (x86_64/ARM64) і не емулює реальний Bluetooth апаратний стек, FaceID/TouchID (тільки фейкове підтвердження) та камеру. Для польового вендинг-додатку Nayax тести на реальному iPhone критичні!

---

[← Попередній: Android Testing & Studio Toolset](./03_Android_Testing_and_Studio_Toolset.md) | [📑 До змісту](../README.md) | [Наступний: Client-Server, Postman & Sniffing →](./05_Client-Server_Postman_and_Sniffing.md)
