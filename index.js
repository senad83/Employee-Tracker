var mysql = require("mysql");
var inquirer = require("inquirer");
const consoleTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employees"
});


function wrap(table) {
  var sqlQuerry = "SELECT * FROM " + table + ";";
  connection.query(sqlQuerry, function (err, results) {
    if (err) throw err;
    console.log("results", results);
  });
  console.log("hello")
};

connection.connect(function (err) {
  if (err) throw err;
  run();
});

function run() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add new employee",
        "View all employees",
        "View employees by department",
        "Update employee role",
        "View all roles",
        "Add role",
        "View all departments",
        "Add departent",
        "Exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add new employee":
          addEmployee();
          break;

        case "View all employees":
          viewAllEmployees();
          break;

        case "View employees by department":
          viewAllEmployeesByDepartment();
          break;

        case "Update employee role":
          updateEmployeeRole();
          break;

        case "View all roles":
          viewAllRoles();
          break;

        case "Add role":
          addRole();
          break;


        case "View all departments":
          viewAllDepartments();
          break;

        case "Add departent":
          AddDepartment();
          break;


        case "Exit":
          connection.end();
          break;
      }
    });
}


function viewAllRoles() {
  connection.query("SELECT * from role", function (err, results) {
    console.table(results);
    run()
  });

}

function viewAllDepartments() {
  connection.query("SELECT * from department", function (err, results) {
    console.table(results);
    run()
  });

};
function viewAllEmployees() {
  connection.query("SELECT * from employee", function (err, results) {
    console.table(results);
    run()
  })
};

function addRole() {
  inquirer
    .prompt([{

      name: "title",
      type: "input",
      message: "What role would you like to add?"
    },
    {
      name: "salary",
      type: "input",
      message: "What salary would you like to add?"
    },
    {
      name: "department_id",
      type: "input",
      message: "What department id would you like to add?"
    }])
    .then(answer => {

      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id
        },

        function (err) {
          if (err) throw err;
          console.log("Your department is added successfully!");
          // re-prompt the user for if they want to bid or post
          run();
        }
      );
    });

};
  



function addEmployee() {
  console.log("addEmployee")

  inquirer
  .prompt([{
  name: "first_name",
      type: "input",
      message: "What is the first name?"
    },
    {
      name: "last_name",
      type: "input",
      message: "What is the last name?"
    },
    {
      name: "role_id",
      type: "input",
      message: "What role id would you like to add?"
    }])
    .then(answer => {

      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id
        },

        function (err) {
          if (err) throw err;
          console.log("Your department is added successfully!");
          // re-prompt the user for if they want to bid or post
          run();
        }
      );
    });


};

function AddDepartment() {
  inquirer
    .prompt({

      name: "name",
      type: "input",
      message: "What department would you like to add?",
    })
    .then(answer => {

      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.name,

        },
        function (err) {
          if (err) throw err;
          console.log("Your department is added successfully!");
          // re-prompt the user for if they want to bid or post
          run();
        }
      );
    });

}


//wrap("department");
// wrap("role");
// wrap("employee");