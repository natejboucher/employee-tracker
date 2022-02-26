const db = require('../db/connection');
const promptUser = require('./Prompt');
const cTable = require('console.table');

function Employee() {};

// View employee table with managers and salary.
Employee.prototype.viewEmployees = function() {
    
}

// Add new employee
Employee.prototype.addEmployee = function() {

}

// Update employee
Employee.prototype.updateEmployee = function() {

}

module.exports = Employee;