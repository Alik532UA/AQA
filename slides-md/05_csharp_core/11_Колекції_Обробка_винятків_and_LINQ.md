# Колекції, Обробка винятків & LINQ

> **Підтеми:** List, Dictionary, HashSet, yield return, try-catch-finally when, First vs Single, Left Join

**Категорія:** C# Core & Advanced (.NET)

---

## Колекції .NET, yield return & Обробка винятків

### Основні колекції (System.Collections.Generic):

- `List<T>`: динамічний масив. Швидкий доступ за індексом O(1). Додавання в кінець O(1) амортизовано. Пошук неіндексованого елемента O(N).

- `Dictionary<TKey, TValue>`: хеш-таблиця. Визначає кошик (bucket) через `GetHashCode()`, а при колізіях перевіряє точний збіг через `Equals()`. Пошук O(1). Для безпечного читання використовуйте `dict.TryGetValue(key, out var val)`.

- `HashSet<T>`: невпорядкована множина унікальних елементів. Пошук `Contains` за O(1), операції перетину та об'єднання множин.

- `Queue<T>` (FIFO) та `Stack<T>` (LIFO).

### yield return та ліниве виконання (Lazy Evaluation):

Оператор `yield return` генерує послідовність по одному елементу за запитом (State Machine), не виділяючи пам'ять під усю колекцію одразу:

```csharp
public IEnumerable<TestCaseData> GetTestData() {
    yield return new TestCaseData("admin", 200);
    yield return new TestCaseData("guest", 403);
}
```

### Обробка винятків (try-catch-finally when):

```csharp
try {
    SendHttpRequest();
} catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound) {
    // Exception Filter (when) фільтрує помилку без розгортання стеку!
    Logger.Warn("Resource not found");
} catch (Exception ex) {
    Logger.Error(ex, "Unexpected crash");
    throw; // ПРАВИЛЬНО: зберігає оригінальний Stack Trace!
    // throw ex; // ПОМИЛКА: затирає стек викликів, втрачаючи місце збою!
} finally {
    CleanupConnections(); // Виконується ЗАВЖДИ
}
```

---

## LINQ & Різниця First/Single & Left Join

### First, FirstOrDefault, Single та SingleOrDefault:

| Метод | 0 елементів | 1 елемент | > 1 елемента |
| :--- | :--- | :--- | :--- |
| First() | InvalidOperationException | Повертає елемент | Повертає перший |
| FirstOrDefault() | default(T) / null | Повертає елемент | Повертає перший |
| Single() | InvalidOperationException | Повертає елемент | InvalidOperationException |
| SingleOrDefault() | default(T) / null | Повертає елемент | InvalidOperationException |

### LINQ Left Outer Join (Топ-завдання співбесіди):

У LINQ немає окремого оператора `left join`. Він реалізується через комбінацію `GroupJoin` + `SelectMany` + `DefaultIfEmpty()`:

```csharp
// Query Syntax:
var leftJoin = from u in users
               join o in orders on u.Id equals o.UserId into userOrders
               from order in userOrders.DefaultIfEmpty()
               select new { UserName = u.Name, OrderId = order?.Id };

// Method Syntax:
var methodLeftJoin = users
    .GroupJoin(orders, u => u.Id, o => o.UserId, (u, ords) => new { u, ords })
    .SelectMany(x => x.ords.DefaultIfEmpty(), (x, o) => new { x.u.Name, OrderId = o?.Id });
```

---

[← Попередній: Generics, Делегати, Події & Лямбди](./10_Generics_Делегати_Події_and_Лямбди.md) | [📑 До змісту](../README.md) | [Наступний: Асинхронність, Ресурси & Reflection для AQA →](./12_Асинхронність_Ресурси_and_Reflection_для_AQA.md)
