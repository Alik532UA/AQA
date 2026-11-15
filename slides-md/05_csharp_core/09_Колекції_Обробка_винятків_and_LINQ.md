# Колекції, Обробка винятків & LINQ

> **Підтеми:** List, Dictionary, HashSet, try-catch-finally-when, LINQ оператори, Left Join

**Категорія:** C# Core & Advanced (.NET)

---

## Колекції .NET & Обробка винятків

### Основні колекції (System.Collections.Generic):

- `List<T>`: динамічний масив. Швидкий доступ за індексом O(1). Додавання в кінець O(1) амортизовано. Пошук неіндексованого елемента O(N).

- `Dictionary<TKey, TValue>`: асоціативний масив на базі хеш-таблиці. Пошук, додавання та видалення за ключем O(1). Ключі мають бути унікальними.

- `HashSet<T>`: невпорядкована множина унікальних елементів. Миттєвий пошук `Contains` за O(1), операції перетину та об'єднання множин.

- `Queue<T>` (FIFO — перший прийшов, перший пішов) та `Stack<T>` (LIFO — останній прийшов, перший пішов).

### Обробка винятків (try-catch-finally when):

```
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

## LINQ & Завдання на співбесіді: Left Join

### Основи LINQ та Deferred Execution:

LINQ (Language Integrated Query) надає SQL-подібні запити до колекцій. **Deferred Execution (Відкладене виконання):** фільтрація (`Where`, `Select`) не виконується в момент створення запиту, а лише при реальній ітерації (`foreach`, `.ToList()`).

### Популярні методи розширення LINQ:

`Where` (фільтрація), `Select` (маппінг/трансформація), `Any` / `All` (перевірка умов), `OrderBy`, `GroupBy`, `First` vs `FirstOrDefault` (повертає null/default, якщо список порожній).

### LINQ Left Outer Join (Топ-завдання співбесіди):

У LINQ немає окремого ключового слова `left join`. Left Join реалізується через `GroupJoin` + `SelectMany` + `DefaultIfEmpty()`:

```
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

---

[← Попередній: Generics, Делегати, Події & Лямбди](./08_Generics_Делегати_Події_and_Лямбди.md) | [📑 До змісту](../README.md) | [Наступний: Асинхронність, Ресурси & Reflection для AQA →](./10_Асинхронність_Ресурси_and_Reflection_для_AQA.md)
