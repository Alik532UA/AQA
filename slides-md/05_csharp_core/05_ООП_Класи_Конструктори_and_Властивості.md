# ООП: Класи, Конструктори & Властивості

> **Підтеми:** Модифікатори доступу, інкапсуляція, конструктори, this, auto-properties, init, record

**Категорія:** C# Core & Advanced (.NET)

---

## Класи, Модифікатори доступу & Інкапсуляція

**Клас (Class)** — це посилальний користувацький тип даних (креслення об'єкта), що об'єднує поля (дані/стан) та методи/властивості (поведінку). **Інкапсуляція** приховує внутрішній стан та захищає його від несанкціонованої прямої модифікації.

### Модифікатори доступу (Access Modifiers) у C#:

**public:** доступний без обмежень усім збіркам та класам.

**private:** доступний виключно всередині того ж класу чи структури.

**protected:** доступний у межах свого класу та у всіх похідних класах (нащадках).

**internal:** доступний будь-якому коду всередині поточної збірки (Assembly / .dll).

**protected internal:** доступний у поточній збірці АБО в класах-нащадках інших збірок.

**private protected:** доступний нащадкам ТІЛЬКИ в межах поточної збірки.

**Принцип інкапсуляції у тестах:** Локатори та внутрішні методи сторінки робляться `private`, а назовні Page Object надає лише публічні бізнес-методи (наприклад, `public DashboardPage LoginAs(User user)`).

---

## Конструктори, Властивості, init & Record

### Конструктори та ключове слово this:

Конструктор ініціалізує екземпляр при створенні через `new`. Перевантаження дозволяє мати кілька конструкторів, викликаючи один з одного через `: this(...)`:

```
public class BasePage {
    protected IWebDriver Driver;
    public BasePage(IWebDriver driver) { this.Driver = driver; }
    // Виклик іншого конструктора:
    public BasePage() : this(WebDriverFactory.GetDriver()) { }
}
```

### Властивості (Properties) та модифікатор init:

- **Auto-properties:** `public string Env &#123; get; set; &#125; = "Prod";`

- **Encapsulated:** `public int Timeout &#123; get; private set; &#125;` (зміна тільки всередині класу).

- **init (C# 9+):** `public string ApiKey &#123; get; init; &#125;` — значення можна присвоїти лише під час ініціалізації об'єкта, далі воно стає незмінним (immutable).

- **Object Initializers:** `var user = new User &#123; Name = "Alex", Role = "Admin" &#125;;`

**record (C# 9+):**
Спеціальний тип для DTO та тестових даних. За замовчуванням має порівняння за значенням (Value Equality), авто-генеровані `ToString()`, `GetHashCode()` та підтримку незмінного копіювання з модифікацією `with`:

`var updatedUser = user with &#123; Role = "QA Lead" &#125;;`

---

---

[← Попередній: Система типів: Value vs Reference & Null](./04_Система_типів_Value_vs_Reference_and_Null.md) | [📑 До змісту](../README.md) | [Наступний: static, const vs readonly, Extension & Partial →](./06_static_const_vs_readonly_Extension_and_Partial.md)
