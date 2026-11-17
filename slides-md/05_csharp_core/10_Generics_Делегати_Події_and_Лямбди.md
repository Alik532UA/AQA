# Generics, Делегати, Події & Лямбди

> **Підтеми:** Generic constraints (where), delegate, Action, Func, Predicate, event, лямбди =>

**Категорія:** C# Core & Advanced (.NET)

---

## Generics (Узагальнення) & Обмеження (Constraints)

**Generics** дозволяють створювати класи, методи та інтерфейси, параметризовані типами даних. Вони забезпечують безпеку типів (Type-Safety) під час компіляції та виключають витрати на boxing/unboxing.

### Обмеження типів (Generic Constraints) через where:

`where T : class` — тип `T` зобов'язаний бути посилальним типом (Reference Type).

`where T : struct` — тип `T` зобов'язаний бути типом значення (Value Type).

`where T : new()` — вимагає наявності публічного конструктора без параметрів (дозволяє робити `new T()`).

`where T : BasePage` — тип повинен наслідувати вказаний базовий клас.

`where T : IDisposable` — тип повинен реалізувати конкретний інтерфейс.

### Практичний AQA патерн фабрики сторінок:

```csharp
public T InitPage<T>() where T : BasePage, new() {
    var page = new T();
    page.SetDriver(this.Driver);
    return page;
}
```

---

## Делегати, Func, Action, Події (Events) & Замикання

### Делегати, Action та Func:

**Action<T1, T2...>:**
Приймає аргументи і **НЕ повертає значення (void)**.

`Action<string> log = msg => Console.WriteLine(msg);`

**Func<T1, T2..., TResult>:**
Приймає аргументи та **ОБОВ'ЯЗКОВО повертає результат** (останній тип у списку generics).

`Func<int, int, bool> isGreater = (a, b) => a > b;`

*Multicast з Func:* при ланцюжку (`+=`) повертається результат **лише останнього** методу.

### Події (Events) та їх безпечний виклик:

Подія (`event`) — обгортка над делегатом (патерн Publisher-Subscriber). Зовнішній код може лише підписуватися (`+=`) або відписуватися (`-=`). Викликається безпечно через Elvis operator: `OnTestFinished?.Invoke(result);`.

**Замикання (Closures) у лямбдах:**

Лямбда захоплює зовнішню змінну **за посиланням**, а не її значення на момент створення:

```csharp
var actions = new List<Action>();
for (int i = 0; i < 3; i++) {
    actions.Add(() => Console.Write(i)); // Захоплюється сама змінна i!
}
actions.ForEach(a => a()); // Виведе "333", бо після циклу i == 3!
```

*Примітка:* у циклі `foreach` (починаючи з C# 5) кожна ітерація створює нову змінну, тому там буде "012".

---

[← Попередній: Пам'ять CLR, Garbage Collector & Рівність](./09_Пам'ять_CLR_Garbage_Collector_and_Рівність.md) | [📑 До змісту](../README.md) | [Наступний: Колекції, Обробка винятків & LINQ →](./11_Колекції_Обробка_винятків_and_LINQ.md)
