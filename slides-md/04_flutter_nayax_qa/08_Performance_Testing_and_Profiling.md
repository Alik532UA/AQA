# Performance Testing & Profiling

> **Підтеми:** Клієнтський перформанс Flutter додатку та API бенчмарки

**Категорія:** Middle Flutter QA (Nayax)

---

## Клієнтська продуктивність мобільного додатку (Mobile Client Performance)

Вимоглива польова робота техніків вимагає швидкого додатку без фризів і зависань на слабких пристроях.

### Ключові метрики клієнтського перформансу:

**Швидкість запуску (Startup Time):**

• *Cold Start* (
- **FPS та UI Jank:** Ціль — 60 кадрів/сек (16.6 мс на кадр) або 120 FPS. Плавність скролу списку апаратів. Пошук пропущених кадрів (Jank) через *Flutter DevTools Performance Overlay*.

- **Memory Leaks (Витоки пам'яті):** Дослідження через Android Studio Profiler та Xcode Memory Graph. Типовий баг у Flutter — не закритий `StreamSubscription` або витік контролерів списків.

- **Споживання батареї та CPU:** Перевірка, чи не гріється смартфон і чи не «жре» фоновий GPS-трекінг техніка заряд акумулятора.

---

## Основи тестування продуктивності API (Backend Performance)

### Навантажувальне тестування бекенду (JMeter / k6 / Postman):

У сфері вендингу сотні тисяч автоматів одночасно шлють пакети транзакцій та телеметрії, а техніки зранку одночасно завантажують маршрути.

### Основні показники (KPI):

**Throughput (RPS):** Кількість оброблених запитів на секунду (Requests Per Second).

**Response Time / Latency:** Час відповіді сервера (Average, 90th percentile, 95th percentile, 99th percentile).

**Error Rate (%):** Допустимий відсоток помилок 5xx (зазвичай < 0.1% при піковому навантаженні).

**Плюс для вакансії:** Розуміння різниці між Stress Testing (визначення межі падіння системи), Load Testing (робота під запланованим навантаженням) та Spike Testing (різкі короткочасні сплески трафіку).

---

[← Попередній: QA Process: Jira, Xray & Git](./07_QA_Process_Jira_Xray_and_Git.md) | [📑 До змісту](../README.md) | [Наступний: Nayax Middle QA Interview Q&A →](./09_Nayax_Middle_QA_Interview_QandA.md)
