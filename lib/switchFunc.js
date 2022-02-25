const viewDept = require('./viewDept');
const viewRoles = require('./viewRoles');
const viewEmployees = require('./viewEmployees');
const addDept = require('./addDept');
const addRole = require('./addRole');
const addEmployee = require('./addEmployee');
const updateRole = require('./updateRole');

function switchFunc(response) {
    //console.log(response);
    switch(response) {
        case 'View all departments.':
            viewDept();
            break;
        case 'View all roles.':
            viewRoles();
            break;
        case 'View all employees.':
            viewEmployees();
            break;
        case 'Add department.':
            addDept();
            break;
        case 'Add a role.':
            addRole();
            break;
        case 'Add an employee.':
            addEmployee();
            break;
        case 'Update an Employee role.':
            updateRole();
    }
};

module.exports = switchFunc;