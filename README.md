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
