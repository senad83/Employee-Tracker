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


function viewAllRoles(){
  connection.query ("SELECT * from role", function(err, results){
    console.table (results);
    run()
  });
  
}

function viewAllDepartments(){
  connection.query ("SELECT * from department", function(err, results){
  console.table (results);
  run()
});

};
function viewAllEmployees(){
  connection.query ("SELECT * from employee", function(err, results){
    console.table (results);
    run()
  })
};

function addRole(){
  console.log ("addEmployee")
};


function addEmployee(){
  console.log ("addEmployee")
};

function AddDepartment(){
    inquirer
      .prompt({

        name: "newDeptName",
        type: "input",
        message: "What department would you like to add?",
      })
      .then(answer => {
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.newDeptName,
          },
          function (err, results) {
            if (err) throw err;
           
            console.table(results)
            
            run();
          }
        );
      //   name: "name",
      //   type: "text",
      //   message: "What name of department you want to add?",
      // }).then 
      // (res => {
      //   tables.addDepartment(res.name);
      //   this.allPrompts();
    });
}
      //(function (answer){
      //   const role_id = answer.role_id
      //   const id = role_id[0]
      //   let query = "INSERT INTO workplace_db.employee (first_name, role_id) values(?, ?)";
      //   connection.query(query,[newEmployeeRole, id], function(err, results){
      //   if (err) throw err;
      //   run()
      // })
      //})

      
  console.log ("addDepartment")
//}


//wrap("department");
// wrap("role");
// wrap("employee");