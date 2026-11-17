# Асинхронність, Ресурси & Reflection для AQA

> **Підтеми:** async/await, Task, IDisposable, using, HttpClient, JSON, Reflection та атрибути NUnit/xUnit, DI Lifetimes

**Категорія:** C# Core & Advanced (.NET)

---

## Async/Await, IDisposable & Керування ресурсами

### Асинхронність: async, await та Task:

- `Task` — об'єкт стану асинхронної операції (аналог `void` для синхронних методів). `Task<T>` повертає результат.

- `async void` — **антипатерн!** Дозволений виключно для UI event handlers. Будь-який виняток у `async void` не можна перехопити через `catch`, що веде до падіння процесу.

- **Небезпека .Result та .Wait():** блокування асинхронного виклику (Sync-over-Async) призводить до Thread Pool Starvation або **Deadlock** (при наявності `SynchronizationContext`) і загортає помилки в `AggregateException`.

- `CancellationToken`: стандартний механізм кооперативного скасування тривалих операцій за таймаутом: `await client.GetAsync(url, ct);`.

### IDisposable та інструкція using:

Слугує для детермінованого звільнення **некерованих ресурсів** (дескрипторів файлів, з'єднань БД, процесів браузера WebDriver):

```csharp
// C# 8 using declaration: звільняється при виході зі скоупу
using var response = await httpClient.GetAsync("/api/users");
var content = await response.Content.ReadAsStringAsync();
// Під капотом розгортається у try { ... } finally { obj.Dispose(); }
```

**HttpClient та JSON:** Створення `new HttpClient()` на кожен запит викликає *Socket Exhaustion* (виснаження портів). Слід використовувати `static HttpClient` або `IHttpClientFactory`. Для серіалізації використовуйте `System.Text.Json.JsonSerializer`.

---

## Рефлексія, Атрибути NUnit/xUnit & DI Життєві цикли

### Що таке Рефлексія (System.Reflection):

Механізм дослідження метаданих збірок, типів, методів та властивостей під час виконання програми:

- Отримання типу: `typeof(LoginPage)` (під час компіляції) або `instance.GetType()` (під час виконання).

- Динамічне створення: `Activator.CreateInstance(type)`.

- Читання приватних полів/методів через `BindingFlags.NonPublic | BindingFlags.Instance`.

### Як NUnit / xUnit використовують рефлексію:

Тестові раннери сканують збірки, знаходять класи з атрибутами `[TestFixture]` та викликають методи з атрибутами `[Test]` / `[Fact]`. Рефлексія також передає дані параметризації (`[TestCase]`, `[Theory]`).

### Dependency Injection (DI) Service Lifetimes:

**Transient:** новий екземпляр створюється щоразу при запиті (ідеально для легковажних утиліт без стану).

**Scoped:** один екземпляр на весь Scope (у тестах — один екземпляр `IWebDriver` на окремий тест/потік).

**Singleton:** єдиний екземпляр на весь життєвий цикл додатку/прогону (конфігурація, підключення до TestRail).

**Кастомний атрибут для автотестів:**

`[AttributeUsage(AttributeTargets.Method)] public class SeverityAttribute(string level) : Attribute { public string Level => level; }`

---

[← Попередній: Колекції, Обробка винятків & LINQ](./11_Колекції_Обробка_винятків_and_LINQ.md) | [📑 До змісту](../README.md)
