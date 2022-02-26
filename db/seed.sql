INSERT INTO department (department_name)
VALUES
('Sales'),
('Production'),
('Warehouse'),
('Corporate');


INSERT INTO roles (title, salary, department_id)
VALUES
('Production Manager', 25.00, 2),
('Production Worker', 18.00, 2 ),
('Lead Sales', 28.50, 1),
('Salesman', 16.50, 1),
('Warehouse Supervisor', 23.50, 3),
('Warehouse Worker', 13.50, 3),
('CFO', 55.50, 4),
('Coporate Assistant', 28.5, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Terrance', 'Arnolds', 7, NULL),
('Nate', 'Boucher',  1, 1),
('Bob', 'Belcher', 2, 2),
('Devon', 'Stevens', 3, 1),
('Linda', 'Belcher', 4, 4),
('Jose', 'Smith', 5, 1),
('Jake', 'Coleman', 6, 6),
('Chris', 'Harper', 8, 1);

