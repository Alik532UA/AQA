# Керування потоком, цикли & Масиви

> **Підтеми:** if-else, тернарний оператор, switch expressions, цикли, масиви, індекси ^ та діапазони ..

**Категорія:** C# Core & Advanced (.NET)

---

## Умовні конструкції: if-else, тернарний & Switch

### if-else та тернарний оператор:

Тернарний оператор замінює прості `if-else` блоки в одну строчку:

```
bool isPassed = actualStatus == HttpStatusCode.OK ? true : false;
string badge = score >= 90 ? "Senior" : score >= 60 ? "Middle" : "Junior";
```

### Switch Statement vs Switch Expression (C# 8+):

**Класичний switch-case:**
Вимагає обов'язкових `break`, `default`, або `goto case` при переході.

**Сучасний Switch Expression та Pattern Matching:**

```
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

- `foreach (var item in list)` — читання елементів через `IEnumerable`. *Змінювати (видаляти/додавати) елементи колекції під час foreach суворо заборонено* (викликає `InvalidOperationException`).

- `while (cond)` — цикл з передумовою.

- `do { ... } while (cond)` — цикл з післяумовою (гарантує **мінімум 1 виконання**).

- `break` — миттєвий вихід з циклу; `continue` — перехід до наступної ітерації.

### Масиви: Одновимірні, Багатовимірні та Зубчасті:

**Одновимірний:** `int[] arr = new int[5];` або `int[] nums = [1, 2, 3];` (C# 12).

**Багатовимірний (2D Rectangular):** `int[,] matrix = new int[3, 3];` — суцільна прямокутна сітка в пам'яті.

**Ступінчастий (Зубчастий / Jagged):** `int[][] jagged = new int[3][];` — масив масивів, де кожен рядок може мати різну довжину.

### Індекси (^) та Діапазони (..) у C# 8+:

```
var words = new[] { "AQA", "C#", "Selenium", "Playwright", "NUnit" };
var last = words[^1];      // "NUnit" (^1 = останній елемент з кінця)
var slice = words[1..4];   // ["C#", "Selenium", "Playwright"] (з 1 включно по 4 виключно)
var allExceptFirst = words[1..]; // від індексу 1 до кінця
```

---

---

[← Попередній: Типи даних & Базовий синтаксис](./01_Типи_даних_and_Базовий_синтаксис.md) | [📑 До змісту](../README.md) | [Наступний: Методи, параметри & Рекурсія →](./03_Методи_параметри_and_Рекурсія.md)
