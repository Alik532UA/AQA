# Система типів: Value vs Reference & Null

> **Підтеми:** Stack vs Heap, Nullable, ??, ??=, ?., implicit/explicit casting, checked/unchecked

**Категорія:** C# Core & Advanced (.NET)

---

## Value Types vs Reference Types (Stack vs Heap)

### Порівняння двох категорій типів:

| Параметр | Value Types (Значення) | Reference Types (Посилання) |
| :--- | :--- | :--- |
| Базовий клас | `System.ValueType` (наслідує `Object`) | `System.Object` |
| Приклади | `int`, `double`, `struct`, `enum`, `bool` | `class`, `string`, `interface`, `delegate`, масиви |
| Розміщення | На Стеку (Stack) або всередині об'єкта у Heap | Самі дані у Купі (Heap), на Стеку лише адреса (4/8 байт) |
| Копіювання | Копіюється саме **значення** (незалежна копія) | Копіюється лише **посилання** (адреса) |
| Очищення | Миттєво при виході зі скоупу стекового фрейму | Збирач сміття (Garbage Collector — GC) |

### Boxing, Unboxing та нюанси передачі:

**Boxing (Пакування):** перетворення Value Type в `object` (виділення пам'яті в хіпі, копіювання значення, навантаження на GC):

`int num = 42; object boxed = num; // Boxing`
**Unboxing (Розпакування):** явне вилучення значення назад у Value Type:

`int unboxed = (int)boxed; // Unboxing`
**Особливість Boxing для Nullable<T>:** при упаковці `int? x = 5` у купу пакується чистий `int`, а якщо `x = null`, упаковка дає `null` без виділення об'єкта.

**Передача Reference Type у метод:** за замовчуванням посилання передається *за значенням* (копіюється адреса). Зміна поля (`user.Name = "New"`) змінить оригінал, але присвоєння `user = new User()` НЕ змінить зовнішню змінну (для цього потрібен `ref User user`).

---

## Null-безпека, Nullable, Casting & Checked

### Nullable типи та Null-оператори:

- `Nullable<T>` або `int?` — дозволяє типам значень зберігати `null`. Властивості: `.HasValue` та `.Value`.

- `?.` (Null-conditional): `driver?.FindElement(by)?.Text` — повертає `null` без падіння з `NullReferenceException`.

- `??` (Null-coalescing): `string title = rawTitle ?? "Default"` — дефолтне значення при `null`.

- `??=` (Null-coalescing assignment): `_client ??= new HttpClient();` — ініціалізація тільки якщо значення дорівнює `null`.

- `!` (Null-forgiving): `user!.Name` — запевнення компілятора, що об'єкт не null.

### Приведення типів (Casting):

**Implicit (неявне):** безпечне розширення без втрати точності (`int` у `long`).

**Explicit (явне):** звуження з можливістю втрати точності: `(int)3.14`.

**Оператор is:** перевірка типу та Pattern Matching:

`if (element is IJavaScriptExecutor js) { js.ExecuteScript("..."); }`
**Оператор as:** безпечне приведення посилальних типів (повертає `null` замість викиду винятку):

`var btn = element as Button; // якщо тип не збігся, btn буде null`

**checked vs unchecked:** За замовчуванням C# виконує цілочисельну арифметику в `unchecked` (при `int.MaxValue + 1` отримуємо `int.MinValue` без помилки). Блок `checked { ... }` вмикає перевірку CLR та кидає `OverflowException`.

---

[← Попередній: Методи, параметри & Рекурсія](./03_Методи_параметри_and_Рекурсія.md) | [📑 До змісту](../README.md) | [Наступний: ООП: Класи, Конструктори & Властивості →](./05_ООП_Класи_Конструктори_and_Властивості.md)
