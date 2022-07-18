INSERT INTO departments (name)
VALUES 
('Sales'),
('IT'),
('Marketing');

INSERT INTO roles (job_title, salary, department_id)
VALUES
    ('Sales Manager', 90000.00, 1),
    ('Sales Associate', 50000.00, 1),
    ('Sales Intern', 10000.00, 1),
    ('Senior Sales Associate', 70000.00, 1),
    ('IT Manager', 180000.00, 2),
    ('Senior Developer', 160000.00, 2),
    ('Developer', 100000.00, 2),
    ('Developer Intern', 60000.00, 2),
    ('Marketing Manager', 100000.00, 3),
    ('Senior Marketing Analyst', 100000.00, 3),
    ('Marketing Analyst', 80000.00, 3),
    ('Marketing Analyst Intern', 30000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Jimmy', 'Raynor', 1, NULL),
    ('Charles', 'Barkley', 2, 1),
    ('Mike', 'Jordan', 2, 1),
    ('Steve', 'Austin', 3, 1),
    ('Ralph', 'Machio', 4, 1),
    ('Jaina', 'Proudmoore', 5, NULL),
    ('Tiger', 'Woods', 6, 6),
    ('Mike', 'Tyson', 6, 6),
    ('Darth', 'Vader', 7, 6),
    ('Lionel', 'Messi', 8, 6),
    ('Samwise', 'Gamgee', 9, NULL),
    ('Frodo', 'Baggins', 10, 11),
    ('Bilbo', 'Baggins', 10, 11),
    ('Meri', 'Took', 11, 11),
    ('Pipin', 'Took', 12, 11);

