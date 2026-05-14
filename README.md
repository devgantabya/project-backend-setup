## SQL Related Some Questions and Answers

### 1. What is the difference between DELETE, TRUNCATE, and DROP?

| Command  | Purpose                  | Removes Data | Removes Table Structure | Can Use WHERE | Rollback Possible |
| -------- | ------------------------ | ------------ | ----------------------- | ------------- | ----------------- |
| DELETE   | Deletes specific rows    | Yes          | No                      | Yes           | Yes               |
| TRUNCATE | Removes all rows quickly | Yes          | No                      | No            | Depends on DBMS   |
| DROP     | Deletes entire table     | Yes          | Yes                     | No            | No                |

### 2. What is a PRIMARY KEY?

A `PRIMARY KEY` is a column or combination of columns that uniquely identifies each row in a table.

#### Rules

- Cannot contain `NULL`
- Must contain unique values
- Only one primary key per table

### 3. What is the difference between PRIMARY KEY and UNIQUE KEY?

| PRIMARY KEY                 | UNIQUE KEY            |
| --------------------------- | --------------------- |
| Uniquely identifies rows    | Ensures unique values |
| Cannot contain NULL         | Can contain NULL      |
| Only one per table          | Multiple allowed      |
| Automatically creates index | Also creates index    |

### 4. What is a FOREIGN KEY?

A `FOREIGN KEY` is a column used to create a relationship between two tables.

It references the primary key of another table.

### 5. What is JOIN in SQL?

`JOIN` is used to combine rows from two or more tables based on a related column.

### 6. What is Normalization?

Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.

### 7. What is Indexing?

An index is used to improve the speed of data retrieval operations in a database.

#### Why do we use Index?

- Faster searching
- Faster sorting
- Improves query performance

### 8. What is the difference between WHERE and HAVING?

| WHERE                                   | HAVING                        |
| --------------------------------------- | ----------------------------- |
| Filters rows before grouping            | Filters groups after grouping |
| Cannot use aggregate functions directly | Can use aggregate functions   |
| Used before GROUP BY                    | Used after GROUP BY           |

### 9. What is a Transaction in SQL?

A transaction is a group of SQL statements executed as a single unit.

#### Example

```sql
BEGIN;

UPDATE employees
SET salary = salary + 1000
WHERE id = 1;

COMMIT;
```

### 10. Write a query to find the second highest salary.

```sql
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);
```

## ER Diagram URL

link: https://drive.google.com/file/d/1lUPLAEt5uR7TZrWJHvJLJE5nxiEm24l3/view?usp=sharing

## Database Questions and Answers

### 1. What is the difference between Primary Key and Foreign Key?

| Primary Key                                | Foreign Key                                |
| ------------------------------------------ | ------------------------------------------ |
| Uniquely identifies each record in a table | Creates a relationship between two tables  |
| Cannot contain NULL values                 | Can contain NULL values                    |
| One primary key per table                  | Multiple foreign keys can exist in a table |

---

### 2. Why is normalization important?

Normalization is important because it:

- Reduces data redundancy
- Improves data consistency
- Prevents update anomalies
- Organizes data efficiently

---

### 3. What is a JOIN?

A JOIN is used to combine data from multiple tables based on related columns.

#### Common Types of JOIN:

- `INNER JOIN`
- `LEFT JOIN`
- `RIGHT JOIN`
- `FULL JOIN`

#### Example:

```sql
SELECT users.name, orders.total
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

---

### 4. Difference between SQL and MongoDB?

| SQL                      | MongoDB                                       |
| ------------------------ | --------------------------------------------- |
| Relational database      | NoSQL database                                |
| Uses tables and rows     | Uses collections and documents                |
| Fixed schema             | Flexible schema                               |
| Best for structured data | Best for unstructured or semi-structured data |

---

### 5. What is a composite key?

A composite key is a key made using two or more columns to uniquely identify a record.

#### Example:

```sql
(student_id, course_id)
```

---

### 6. What is a weak entity?

A weak entity cannot be uniquely identified by its own attributes and depends on a strong entity.

#### Example:

- `Order` → Strong Entity
- `OrderItem` → Weak Entity

---

### 7. Why do we use constraints?

Constraints are used to maintain data integrity and accuracy.

#### Common Constraints:

- `PRIMARY KEY`
- `FOREIGN KEY`
- `UNIQUE`
- `NOT NULL`
- `CHECK`
- `DEFAULT`

---

### 8. Explain many-to-many relationship.

A many-to-many relationship occurs when:

- One record in Table A relates to many records in Table B
- One record in Table B relates to many records in Table A

#### Example:

- Students ↔ Courses

This relationship is usually handled using a junction table.

#### Example Table:

```sql
student_courses
```

---

### 9. What is the difference between Clustered and Non-Clustered Index?

| Clustered Index                        | Non-Clustered Index                    |
| -------------------------------------- | -------------------------------------- |
| Stores data physically in sorted order | Stores pointers to data                |
| Only one clustered index per table     | Multiple non-clustered indexes allowed |
| Faster for range queries               | Faster for specific lookups            |

---

### 10. Explain Database Sharding and Partitioning. When would you use each?

#### Partitioning

Partitioning divides a large table into smaller parts within the same database server.

**Use Case:**  
When data is very large but can still fit on a single server.

#### Sharding

Sharding distributes data across multiple database servers.

**Use Case:**  
When an application requires horizontal scaling and handles massive traffic or data.
