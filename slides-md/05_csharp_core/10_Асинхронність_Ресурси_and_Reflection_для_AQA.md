# Асинхронність, Ресурси & Reflection для AQA

> **Підтеми:** async/await, Task, IDisposable, using, HttpClient, JSON, Reflection та атрибути NUnit/xUnit

**Категорія:** C# Core & Advanced (.NET)

---

## Async/Await, IDisposable & Керування ресурсами

### Асинхронність: async, await та Task:

- `Task` (повертає `void`) та `Task<T>` (повертає результат): представляють асинхронну операцію, що виконується без блокування потоку.

- `async void` — **антипатерн!** Дозволений виключно для обробників подій UI. Будь-який виняток у `async void` не може бути перехоплений через `catch` і миттєво аварійно завершує процес.

- Паралельний запуск: `await Task.WhenAll(task1, task2);`

### IDisposable та інструкція using:

Патерн `IDisposable` слугує для детермінованого звільнення **некерованих ресурсів** (дескрипторів файлів, потоків сокетів, сесій браузера Playwright/Selenium):

```
// C# 8 using declaration: звільняється при виході зі скоупу методу
using var response = await httpClient.GetAsync("/api/users");
var content = await response.Content.ReadAsStringAsync();
// Під капотом розгортається у try { ... } finally { obj.Dispose(); }
```

**HttpClient та JSON:** Створення `new HttpClient()` на кожен запит веде до *Socket Exhaustion* (виснаження портів ОС). Потрібно використовувати `static HttpClient` або `IHttpClientFactory`. Для серіалізації використовують вбудований високошвидкісний `System.Text.Json.JsonSerializer`.

---

## Рефлексія (Reflection) & Атрибути для AQA

### Що таке Рефлексія (System.Reflection):

Механізм дослідження метаданих збірок, типів, методів та властивостей під час виконання програми:

- Отримання типу: `typeof(LoginPage)` (під час компіляції) або `instance.GetType()` (під час виконання).

- Динамічне створення: `Activator.CreateInstance(type)`.

- Читання приватних полів/методів через `BindingFlags.NonPublic | BindingFlags.Instance`.

### Як NUnit / xUnit використовують рефлексію:

Тестові раннери сканують збірки, шукають класи з атрибутами `[TestFixture]` та викликають методи з атрибутами `[Test]` / `[Fact]`. Також рефлексія зчитує тестові дані для параметризації (`[TestCase]`, `[Theory]`, `[TestCaseSource]`).

### Створення кастомного атрибута для автотестів:

```
[AttributeUsage(AttributeTargets.Method)]
public class SeverityAttribute(string level) : Attribute {
    public string Level { get; } = level;
}

// Використання:
[Test, Severity("Blocker")]
public void PaymentCheckoutSmokeTest() { ... }
```

**Висновок для інтерв'ю:** «Рефлексія та атрибути — фундамент будь-якого сучасного фреймворку автоматизації тестування (.NET). Вони забезпечують динамічне виявлення тестів, генерацію звітів (Allure/Extent) та керування життєвим циклом фікстур».

---

---

[← Попередній: Колекції, Обробка винятків & LINQ](./09_Колекції_Обробка_винятків_and_LINQ.md) | [📑 До змісту](../README.md)
