INSERT INTO department (name, id) values ('Marketing', 1);
INSERT INTO department (name, id) values ('Accounting', 2);
INSERT INTO department (name, id) values ('HR', 3);
INSERT INTO department (name, id) values ('Production', 4);


INSERT INTO role (id,title, salary, department_id) VALUES
    (5, "Salesman", 60000.12, 1),
    (6, "CPA", 70000.22, 2),
    (7, "Psychologist", 49000.44, 3),
    (8, "Machine operator", 42000.55, 4)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
    (4, "Brandon", "Rogers", 8, null),
    (1, "Alex", "Ferguson", 6, null),
    (3, "Luka", "Modric", 7, null),
    (2, "Peppe", "Marotta", 5, null)
    (1, "Peppe", "Mancini", 5, null)
