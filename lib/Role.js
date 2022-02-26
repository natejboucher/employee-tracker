const db = require('../db/connection');
const promptUser = require('./Prompt');
const cTable = require('console.table');
const returnPrompt = require('../utils/utilities.js');
const inquirer = require('inquirer');

function Role() {};

// View all roles
Role.prototype.viewRoles = function() {
    console.log('Viewing Roles.');
    db.query(
        `
        SELECT * FROM roles;
        `, function (err, data) {
        console.table(data);
        //returnPrompt();
    }
    )
}

// Add a role
Role.prototype.addRole = function() {
    //Get list of existing departments for role prompt.
    let departments = [];
    db.query(
        `
        SELECT * FROM department;
        `, function (err, data) {
        // for (let i = 0; i < data.length; i++) {
        //     departments.push(data[i].department_name);
        // }
        departments.push(Object.values(data));
    }
    )
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'roleName',
                message: 'What is the role name?',
                validate: roleInput => (roleInput) ? true : console.log('Please enter an department.')
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the hourly salary? (i.e 15.00)',
                validate: salaryInput => (salaryInput) ? true : console.log('Please enter a valid number.')
            },
            {
                type: 'list',
                name: 'deptOptions',
                message: 'What department no. does this role belong to?',
                choices: departments
            }
        ])
        .then(response => {
            const sql = `INSERT INTO roles () VALUES (?)`;
            const params = (Object.values(response)).toString();
            db.query(sql, params, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log('Department added!');
                //new Prompt().promptUser();
            });
        });
}

module.exports = Role;