# Client-Server, Postman & Sniffing

> **Підтеми:** REST API, Swagger, Postman, Charles Proxy, SSL Pinning

**Категорія:** Middle Flutter QA (Nayax)

---

## REST API, Swagger & Postman для мобільного QA

Мобільний CRM-додаток є лише тонким клієнтом. Уся бізнес-логіка, залишки товарів, тарифи та аутентифікація проходять через **REST API бекенд**.

### Стек роботи з API:

- **Swagger / OpenAPI:** Вивчення контракту ендпоінтів ще до готовності UI. Перевірка типів полів (string, number, boolean), обов'язковості параметрів, форматів помилок 400 Bad Request.

- **Postman Environments & Variables:** Створення змінних середовища (`base_url`, `jwt_token`, `machine_id`) для швидкого перемикання між Dev, Staging та Prod.

- **Pre-request & Tests скрипти:** Автоматичне збереження токена після логіну: `pm.environment.set("jwt_token", pm.response.json().token);`.

- **Валідація кодів відповідей:** `200 OK`, `201 Created`, `401 Unauthorized` (expired token), `403 Forbidden` (доступ заборонено), `404 Not Found`, `422 Unprocessable Entity`, `500 Internal Error`.

---

## Перехоплення трафіку (Charles Proxy / Proxyman) & SSL Pinning

### Чому перехоплювач трафіку незамінний для Mobile QA:

- **Перевірка запитів додатку:** переконатися, що додаток відправляє коректні JSON-пейлоади та не дублює важкі запити.

- **Мокування відповідей (Map Remote / Breakpoints):** підміна відповіді сервера (наприклад, повернути 500 помилку, пустий масив товарів `[]` або некоректні дані) для перевірки обробки помилок в інтерфейсі (Error handling).

- **Throttling (Емуляція поганого зв'язку):** симуляція 2G, 3G, високого пінгу (2000 мс) та втрати пакетів (Packet Loss).

**Особливість Flutter & SSL Pinning:**
Flutter не використовує системне сховище сертифікатів Android/iOS, а працює через власний Dart HttpClient. Тому за замовчуванням Charles не може розшифрувати HTTPS. Для тестування девелопери збирають QA-білд з відключеним SSL Pinning або дозволом довіряти proxy-сертифікатам.

---

[← Попередній: iOS Testing & Xcode Toolset](./04_iOS_Testing_and_Xcode_Toolset.md) | [📑 До змісту](../README.md) | [Наступний: Mobile Test Design & Matrix →](./06_Mobile_Test_Design_and_Matrix.md)
