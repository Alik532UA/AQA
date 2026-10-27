# SQL

> **Підтеми:** Найчастіше використовувані команди SQL

**Категорія:** Automation QA

---

## Найчастіше використовувані команди SQL для тестувальника

### DDL команди (Data Definition Language)

**CREATE TABLE:** Створити нову таблицю

```
CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);
```

**ALTER TABLE:** Змінити структуру таблиці

```
ALTER TABLE customers ADD COLUMN phone VARCHAR(20);
```

**DROP TABLE:** Видалити таблицю

```
DROP TABLE customers;
```

### DML команди (Data Manipulation Language)

**SELECT:** Вибрати дані з таблиці

```
SELECT * FROM customers;
```

**INSERT INTO:** Вставити новий запис

```
INSERT INTO customers (name, email) 
VALUES ('John Doe', 'john@example.com');
```

**UPDATE:** Оновити існуючі записи

```
UPDATE customers SET email = 'new@mail.com' WHERE id = 1;
```

**DELETE FROM:** Видалити записи

```
DELETE FROM customers WHERE id = 1;
```

### Фільтрація, агрегація та JOIN запити:

**WHERE:** фільтрація даних (WHERE name = 'John Doe')

**ORDER BY:** сортування результатів (ORDER BY name ASC)

**GROUP BY:** групування за стовпцями

**HAVING:** фільтрація результатів ПІСЛЯ групування

**JOIN:** об'єднання даних з кількох таблиць (INNER JOIN, LEFT JOIN)

### Приклад більш складного запиту на співбесіді:

```
SELECT customers.name, orders.order_date
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id
WHERE orders.order_date BETWEEN '2023-01-01' AND '2023-12-31'
ORDER BY customers.name;
```

---

---

[← Попередній: Data Storages](./09_Data_Storages.md) | [📑 До змісту](../README.md) | [Наступний: SOLID →](./11_SOLID.md)
