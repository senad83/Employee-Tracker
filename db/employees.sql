DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;


-- Creates the table "people" within animals_db --
CREATE TABLE department (
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,

 id INTEGER(11) AUTO_INCREMENT NOT NULL,
 
  PRIMARY KEY (id),
 
);