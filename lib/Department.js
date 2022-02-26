const db = require('../db/connection');
const Prompt = require('./prompt.js');
const cTable = require('console.table');
const inquirer = require('inquirer');
const returnPrompt = require('../utils/utilities.js');

function Department() { };

// View departments
Department.prototype.viewDept = function () {
    console.log('Viewing departments.');
    db.query(
        `
        SELECT * FROM department;
        `, function (err, data) {
        console.table(data);
        //returnPrompt();
    }
    )
}

// Add department
Department.prototype.addDept = function () {
    inquirer
        .prompt([
            {
                type: 'iput',
                name: 'dept_name',
                message: 'What is the department name?',
                validate: deptInput => (deptInput) ? true : console.log('Please enter an department.')
            }
        ])
        .then(response => {
            const sql = `INSERT INTO department (department_name) VALUES (?)`;
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

module.exports = Department;