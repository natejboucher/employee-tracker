const Department = require('./Department');
const Employee = require('./Employee');
const Role = require('./Role');

function switchFunc(response) {
    //console.log(response);
    switch(response) {
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
};

module.exports = switchFunc;