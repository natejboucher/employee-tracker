const db = require('../db/connection');
const Prompt = require('./Prompt');
const cTable = require('console.table');

function Department() {};

Department.prototype.viewDept = function() {
    console.log('Viewing departments.');
    db.query(
        `
        SELECT * FROM department;
        `, function (err, data) {
        console.table(data);
        new Prompt().promptUser();
    }
    )
}



module.exports = Department;