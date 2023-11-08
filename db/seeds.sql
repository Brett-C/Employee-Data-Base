


INSERT INTO departments (id, department_name)
Values  
(1, 'Grocery'),
(2, 'Toys'),
(3, 'Style'),
(4, 'Electronics'),
(5, 'Beauty'),
(6, 'Essentials');

SELECT * FROM department;

INSERT INTO roles (id, title, salary, department_id)
VALUES  
(1, "Team Member", 50000, 1),
(2, "Team Leader", 75000, 2),
(3, "Executive Team Leader", 100000, 3);

SELECT * FROM roles;

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  
( 1, 'Brett', 'Cannon', 1, 1 ),
( 2, 'Justin', 'Hathaway', 1, 1 ),
( 3, 'Anthony', 'Davis', 1, 2 ),
( 4, 'Cole', 'Schmirbeck', 2, 3 ),
( 5, 'Rich', 'Douglas', 3, 3 ),
( 6, 'Zack', 'Smith', 1, 1 ),
( 7, 'Shiloh', 'Ballard', 2, 3);

SELECT * FROM employee;
