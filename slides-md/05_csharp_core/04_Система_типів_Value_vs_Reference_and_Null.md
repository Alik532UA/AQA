# Система типів: Value vs Reference & Null

> **Підтеми:** Stack vs Heap, Nullable, ??, ??=, ?., implicit/explicit casting, checked/unchecked

**Категорія:** C# Core & Advanced (.NET)

---

## Value Types vs Reference Types (Stack vs Heap)

### Порівняння двох категорій типів:

Параметр
Value Types (Значення)
Reference Types (Посилання)

Базовий клас
`System.ValueType`
`System.Object`

Приклади
`int`, `struct`, `enum`, `bool`
`class`, `string`, `interface`, масиви

Розміщення
Швидкий Стек (Stack) або inline у складі об'єкта
Керована купа (Managed Heap), на стеку лише адреса (4/8B)

Копіювання
Копіюється саме **значення**
Копіюється лише **посилання** (адреса)

Очищення
Миттєво при виході зі скоупу
Збирач сміття (Garbage Collector)

### Boxing та Unboxing:

**Boxing (Пакування):** перетворення Value Type в `object`. Створюється екземпляр у хіпі, туди копіюється значення (навантажує GC):

`int num = 42; object boxed = num; // Boxing`
**Unboxing (Розпакування):** явне вилучення значення назад у Value Type:

`int unboxed = (int)boxed; // Unboxing` (кидає `InvalidCastException` при помилці типу).

---

## Null-безпека, Nullable, Casting & Checked

### Nullable типи та Null-оператори:

- `Nullable<T>` або `int?` — дозволяє типам значень зберігати `null`. Властивості: `.HasValue` та `.Value`.

- `?.` (Null-conditional): `driver?.FindElement(by)?.Text` — зупиняє обчислення та повертає `null` без падіння з помилкою.

- `??` (Null-coalescing): `string title = rawTitle ?? "Default"` — значення за замовчуванням.

- `??=` (Null-coalescing assignment): `_client ??= new HttpClient();` — ініціалізує змінну тільки якщо вона дорівнює `null`.

- `!` (Null-forgiving): `user!.Name` — запевняє компілятор, що значення не є null.

### Приведення типів (Casting):

**Implicit (неявне):** безпечне розширення без втрати точності (`int` у `long`).

**Explicit (явне):** звуження з можливістю переповнення: `(int)3.14`.

**Оператор is:** перевірка типу та безпечне присвоєння (Pattern Matching):

`if (element is IJavaScriptExecutor js) { js.ExecuteScript("..."); }`
**Оператор as:** безпечне приведення посилальних типів (повертає `null` замість винятку):

`var btn = element as Button; // якщо не Button, btn буде null`

**checked vs unchecked:** За замовчуванням C# працює в `unchecked` (при переповненні `int.MaxValue + 1` дає `int.MinValue`). Блок `checked { ... }` вмикає перевірку та кидає `OverflowException`.

---

---

[← Попередній: Методи, параметри & Рекурсія](./03_Методи_параметри_and_Рекурсія.md) | [📑 До змісту](../README.md) | [Наступний: ООП: Класи, Конструктори & Властивості →](./05_ООП_Класи_Конструктори_and_Властивості.md)
