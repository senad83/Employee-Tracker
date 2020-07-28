DROP DATABASE IF EXISTS employee;
CREATE DATABASE employee;
USE employee;



  CREATE TABLE department (
  name VARCHAR(30) NOT NULL,
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (id),
 );

 CREATE TABLE role (
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    management BOOLEAN NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);


21:45:13	INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES     (4, "Brandon", "Rogers", 10, null),     (1, "Alex", "Ferguson", 6, null),     (3, "Luka", "Modric", 8, null),     (2, "Peppe", "Marotta", 5, null),     (1, "Janica", "Kostelic", 9, null),     (3, "Charlton", "Dowling", 7, null)	Error Code: 1062. Duplicate entry '1' for key 'employee.PRIMARY'	0.012 sec
