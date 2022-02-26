const Prompt = require('../lib/Prompt.js');
const inquirer = require('inquirer');

function returnPrompt() {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'returnMenu',
                message: 'Return to menu?'
            }
        ])
        .then(response => {
            (response) ? new Prompt().promptUser() : false;
        })
};

module.exports = returnPrompt;