const db = require('../db/connection');
const promptUser = require('./Prompt');
const cTable = require('console.table');

function Role() {};

// View all roles
Role.prototype.viewRoles = function() {
    console.log('Viewing Roles.');
    db.query(
        `
        SELECT * FROM roles;
        `, function (err, data) {
        console.table(data);
        //promptUser();
    }
    )
}

// Add a role
Role.prototype.addRole = function() {
    
}

module.exports = Role;