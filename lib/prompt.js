const inquirer = require('inquirer');
const Department = require('./Department');
const Employee = require('./Employee');
const Role = require('./Role');
//const switchFunc = require('./switchFunc');

function Prompt() {
    this.response;
}

Prompt.prototype.promptUser = function() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'dbOptions',
                message: 'What would you like to do?',
                choices: [
                    'View all departments.',
                    'View all roles.',
                    'View all employees.',
                    'Add department.',
                    'Add a role.',
                    'Add an employee.',
                    'Update an Employee role.'
                ]
            }
       ])
       .then(response => {
            //let choice = Object.values(response);
            this.response = (Object.values(response)).toString();
            this.switchFunc();
       })
}

Prompt.prototype.switchFunc = function() {
    switch(this.response) {
        case 'View all departments.':
            new Department().viewDept();
            break;
        case 'View all roles.':
            new Role().viewRoles();
            break;
        case 'View all employees.':
            new Employee().viewEmployees();
            break;
        case 'Add department.':
            new Department().addDept();
            break;
        case 'Add a role.':
            new Role().addRole();
            break;
        case 'Add an employee.':
            new Employee().addEmployee();
            break;
        case 'Update an Employee role.':
            new Role().updateRole();
    }
}



module.exports = Prompt;