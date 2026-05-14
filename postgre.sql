-- 1. Create a Database
CREATE DATABASE company_db;

-- 2. Create a Table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    salary DECIMAL(10, 2),
    department VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Insert Data
INSERT INTO
    employees (
        name,
        email,
        salary,
        department
    )
VALUES (
        'Gantabya',
        'gantabya@gmail.com',
        15000,
        'IT'
    ),
    (
        'Arafat',
        'arafat@gmail.com',
        25000,
        'HR'
    ),
    (
        'Shuvo',
        'shuvo@gmail.com',
        40000,
        'Finance'
    ),
    (
        'Sporsho',
        'sporsho@gmail.com',
        20000,
        'IT'
    ),
    (
        'Zamal',
        'zamal@gmail.com',
        32000,
        'HR'
    ),
    (
        'Moumita',
        'moumita@gmail.com',
        45000,
        'HR'
    );

-- 4. Select All Data
SELECT * FROM employees

-- 5. Select Specific Columns
SELECT name, salary FROM employees;

-- 6. Use WHERE Condition
SELECT * FROM employees WHERE salary > 40000;

-- 7. Use ORDER BY
SELECT * FROM employees ORDER BY salary DESC;

-- 8. Use LIMIT
SELECT * FROM employees ORDER BY salary DESC LIMIT 3;

-- 9. Update Data
UPDATE employees SET salary = 50000 WHERE id = 1;

-- 10. Delete Data
DELETE FROM employees WHERE id = 5;

-- 11. Use BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 30000 AND 60000;

-- 12. Use IN
SELECT * FROM employees WHERE department IN ('IT', 'HR');

-- 13. Use COUNT
SELECT COUNT(*) AS total_employees FROM employees;

-- 14. Use AVG
SELECT AVG(salary) AS average_salary FROM employees;

-- 15. Use GROUP BY
SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY
    department;

-- 16. Use HAVING
SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY
    department
HAVING
    COUNT(*) > 2;

-- 17. Add Constraints
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) DEFAULT 0.00
);

-- Add Foreign Key
-- 18. Create Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- 19. Create Orders Table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT,
    amount DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id)
);

-- 20. Use INNER JOIN
SELECT users.name, orders.amount
FROM users
    INNER JOIN orders ON users.id = orders.user_id;