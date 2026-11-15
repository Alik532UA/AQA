# ООП: Класи, Конструктори & Властивості

> **Підтеми:** Модифікатори доступу, інкапсуляція, конструктори, this, auto-properties, init, record

**Категорія:** C# Core & Advanced (.NET)

---

## Класи, Модифікатори доступу & Інкапсуляція

**Клас (Class)** — це посилальний тип даних (креслення об'єкта), що об'єднує поля (стан) та методи/властивості (поведінку). **Інкапсуляція** приховує внутрішню реалізацію та захищає її від прямого втручання.

### Модифікатори доступу (Access Modifiers) у C#:

**public:** доступний без обмежень усім збіркам та класам.

**private:** доступний виключно всередині того ж класу чи структури.

**protected:** доступний у межах свого класу та у всіх похідних класах (нащадках).

**internal:** доступний будь-якому коду всередині поточної збірки (Assembly / .dll).

**protected internal:** доступний у поточній збірці АБО в класах-нащадках інших збірок.

**private protected:** доступний нащадкам ТІЛЬКИ в межах поточної збірки.

**Принцип інкапсуляції у тестах:** Локатори та внутрішні методи сторінки робляться `private`, а назовні Page Object надає лише публічні бізнес-методи (наприклад, `public DashboardPage LoginAs(User user)`).

---

## Конструктори, Властивості, init, required & Record

### Конструктори та ключове слово this:

Конструктор ініціалізує екземпляр при створенні через `new`. Перевантаження дозволяє викликати інший конструктор через `: this(...)`:

```csharp
public class BasePage {
    protected IWebDriver Driver;
    public BasePage(IWebDriver driver) { this.Driver = driver; }
    // Делегування іншому конструктору:
    public BasePage() : this(WebDriverFactory.GetDriver()) { }
}
```

### Властивості, init, required & Record:

- **Auto-properties:** `public string Env { get; set; } = "Prod";`

- **Encapsulated:** `public int Timeout { get; private set; }` (зміна лише всередині класу).

- **init (C# 9+):** `public string ApiKey { get; init; }` — значення присвоюється лише при ініціалізації об'єкта, далі стає immutable.

- **required (C# 11+):** `public required string BaseUrl { get; init; }` — зобов'язує ініціалізувати властивість при створенні об'єкта через `{ ... }` під час компіляції.

- **Object Initializers:** `var user = new User { Name = "Alex" };` (спочатку відпрацьовує конструктор, потім властивості).

**record (C# 9+):**
Тип для незмінних DTO та тестових даних. За замовчуванням має порівняння за значенням (Value Equality), авто-генеровані `ToString()`, `GetHashCode()` та підтримку неруйнівного копіювання з модифікацією `with`:

`var updatedUser = user with { Role = "QA Lead" };`

---

[← Попередній: Система типів: Value vs Reference & Null](./04_Система_типів_Value_vs_Reference_and_Null.md) | [📑 До змісту](../README.md) | [Наступний: static, const vs readonly, Extension & Partial →](./06_static_const_vs_readonly_Extension_and_Partial.md)
