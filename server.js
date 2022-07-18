const express = require('express');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./db/connection');

// Start server after DB connection
connection.connect(err => {
  if (err) throw err;
  console.log('=================');
  console.log('Employee Tracker');
  console.log('=================');
  promptUser();
});

// initail prompt 
const promptUser = () => {
    inquirer.prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'Please select an option:',
            choices: [
                'View All Employees',
                'View All Roles',
                'View All Departments',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit'
            ]
        }
    ])
    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View All Employees') {
            viewAllEmployees();
        }

        if (choices === 'View All Departments') {
        viewAllDepartments();
        }

        if (choices === 'View All Roles') {
        viewAllRoles();
        }

        if (choices === 'Add Employee') {
            addEmployee();
        }


        
        if (choices === 'Add Role') {
            addRole();
        }
        
        if (choices === 'Add Department') {
            addDepartment();
        }
        
        if (choices === 'Exit') {
            connection.end();
        }
        if (choices === 'Update Employee Role') {
            updateEmployeeRole();
        }
    });
}

// View all employees
const viewAllEmployees = () => {
    var query = "SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, departments.name AS department, roles.salary FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id"
    connection.query(query, function (err, res) {
        console.log('All Employees');
        console.log('=================');
        console.table(res);
        console.log('=================');
        promptUser();
      });
  };


// View all departments
const viewAllDepartments = () => {
    var query = "SELECT * FROM departments"
    connection.query(query, function (err, res) {
        console.log('All Depatments');
        console.log('=================');
        console.table(res);
        console.log('=================');
        promptUser();
      });
}

// View all roles
const viewAllRoles = () => {
    var query = "SELECT * FROM roles"
    connection.query(query, function (err, res) {
        console.log('All Roles');
        console.log('=================');
        console.table(res);
        console.log('=================');
        promptUser();
      });
}

// Add employee
function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the employee's first name",
          name: "firstName"
        },
        {
          type: "input",
          message: "Enter the employee's last name",
          name: "lastName"
        },
        {
          type: "input",
          message: "Enter the employee's role ID",
          name: "addEmployRole"
        },
        {
          type: "input",
          message: "Enter the employee's manager ID",
          name: "addEmployPerson"
        }
      ])
      .then(function (res) {
        const firstName = res.firstName;
        const lastName = res.lastName;
        const employRoleID = res.addEmployRole;
        const employPersonID = res.addEmployPerson;
        const query = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", "${employRoleID}", "${employPersonID}")`;
        connection.query(query, function (err, res) {
          if (err) {
            throw err;
          }
          console.log('New Employee');
          console.log('=================');
          console.table(res);
          console.log('=================');
          promptUser();
        });
      });
}


// Add department
const addDepartment = () => {
    inquirer
    .prompt({
      type: "input",
      message: "Enter the name of the new department",
      name: "newDept"
    })
    .then(function (res) {
      const newDepartment = res.newDept;
      const query = `INSERT INTO departments (name) VALUES ("${newDepartment}")`;
      connection.query(query, function (err, res) {
        if (err) {
          throw err;
        }
        console.log('=================');
        console.table(res);
        console.log('=================');
        promptUser();
      });
    });
}
// Add role
const addRole = () => {
    inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the employee's title",
        name: "roleTitle"
      },
      {
        type: "input",
        message: "Enter the employee's salary",
        name: "roleSalary"
      },
      {
        type: "input",
        message: "Enter the employee's department ID",
        name: "roleDept"
      }
    ])
    .then(function (res) {
      const title = res.roleTitle;
      const salary = res.roleSalary;
      const departmentID = res.roleDept;
      const query = `INSERT INTO roles (job_title, salary, department_id) VALUES ("${title}", "${salary}", "${departmentID}")`;
      connection.query(query, function (err, res) {
        if (err) {
          throw err;
        }
        console.log('=================');
        console.table(res);
        console.log('=================');
        promptUser();
      });
    });
}
// Update employee role
const updateEmployeeRole = () => {
    inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the employee's ID you want to be updated",
        name: "updateEmploy"
      },
      {
        type: "input",
        message: "Enter the new role ID for that employee",
        name: "newRole"
      }
    ])
    .then(function (res) {
        const updateEmploy = res.updateEmploy;
        const newRole = res.newRole;
        const queryUpdate = `UPDATE employees SET role_id = "${newRole}" WHERE id = "${updateEmploy}"`;
        connection.query(queryUpdate, function (err, res) {
          if (err) {
            throw err;
          }
          console.table(res);
          promptUser();
        })
      });
}