const inquirer = require('inquirer');
const switchFunc = require('./switchFunc');

function promptUser() {
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
            let choice = (Object.values(response)).toString();
            switchFunc(choice);
       });
};

module.exports = promptUser;