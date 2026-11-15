# Керування потоком, цикли & Масиви

> **Підтеми:** if-else, тернарний оператор, switch expressions, цикли, масиви, індекси ^ та діапазони ..

**Категорія:** C# Core & Advanced (.NET)

---

## Умовні конструкції: if-else, тернарний & Switch

### if-else та тернарний оператор:

Тернарний оператор `умова ? вираз_true : вираз_false` замінює прості `if-else` блоки для присвоєння значень:

```csharp
int timeout = isSlowEnv ? 60 : 10;
string badge = score >= 90 ? "Senior" : score >= 60 ? "Middle" : "Junior";
// Антипатерн: bool isOk = (code == 200) ? true : false; -> Пишіть просто: bool isOk = code == 200;
```

### Switch Statement vs Switch Expression (C# 8+):

**Класичний switch-case:**
Вимагає обов'язкових `break`, `default`, або `goto case` при переході.

**Сучасний Switch Expression та Pattern Matching:**

```csharp
var result = statusCode switch {
    200 => "Success",
    400 or 404 => "Client Error",
    >= 500 and <= 599 => "Server Crash",
    _ => "Unknown Status" // _ це дефолтний випадок
};
```

**Pattern Matching:** перевірка об'єкта на тип та властивості прямо у switch: `case HttpResponseMessage { IsSuccessStatusCode: true } res: ...`

---

## Цикли, види масивів & Індекси та діапазони

### Види циклів у C#:

- `for (int i = 0; i < n; i++)` — ітерація з лічильником за індексами.

- `foreach (var item in list)` — читання елементів через `IEnumerable`. *Модифікувати колекцію під час foreach заборонено* (кидає `InvalidOperationException`).

- **Безпечне видалення під час ітерації:** використовуйте зворотний цикл `for (int i = list.Count - 1; i >= 0; i--)`, метод `list.RemoveAll(...)` або копію `list.ToList()`.

- `while (cond)` та `do { ... } while (cond)` (гарантує **мінімум 1 виконання**).

- `break` — миттєвий вихід; `continue` — перехід до наступної ітерації.

### Масиви: Одновимірні, Багатовимірні та Зубчасті:

**Одновимірний:** `int[] arr = new int[5];` або `int[] nums = [1, 2, 3];` (C# 12).

**Пастка .Length у 2D масивах:** Для `int[,] matrix = new int[2, 3];` властивість `matrix.Length` повертає загальну кількість елементів (`6`), а розміри вимірів беруться через `matrix.GetLength(0)` (2) та `matrix.GetLength(1)` (3).

**Ступінчастий (Jagged):** `int[][] jagged = new int[2][];` — масив масивів. Тут `jagged.Length` повертає кількість підмасивів (`2`).

### Індекси (^) та Діапазони (..) у C# 8+:

```csharp
var words = new[] { "AQA", "C#", "Selenium", "Playwright", "NUnit" };
var last = words[^1];      // "NUnit" (^1 = останній елемент з кінця)
var slice = words[1..4];   // ["C#", "Selenium", "Playwright"] (з 1 включно по 4 виключно)
var allExceptFirst = words[1..]; // від індексу 1 до кінця
```

---

[← Попередній: Типи даних & Базовий синтаксис](./01_Типи_даних_and_Базовий_синтаксис.md) | [📑 До змісту](../README.md) | [Наступний: Методи, параметри & Рекурсія →](./03_Методи_параметри_and_Рекурсія.md)
