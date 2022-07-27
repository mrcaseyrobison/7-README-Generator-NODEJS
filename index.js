// Required Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user
const questions = [
    {type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
        validate: title => {
            if(title) {
                return true;
            } else {
                console.log("You must provide a response")
                return false;
            }
        }
    },
    {type: 'input',
    name: 'description',
    message: 'Please provide a detailed description of your project',
        validate: description => {
            if(description) {
                return true;
            } else {
                console.log("You must provide a response")
                return false;
            }
        }
    },
    {type: 'input',
    name: 'install',
    message: 'Please provide any installation instructions',
        validate: install => {
            if(install) {
                return true;
            } else {
                console.log("You must provide a response")
                return false;
            }
        }
    },
    {type: 'input',
    name: 'usage',
    message: 'Please provide the main use case for this project',
        validate: usage => {
            if(usage) {
                return true;
            } else {
                console.log("You must provide a response")
                return false;
            }
        }
    },
   
    {type: 'checkbox',
    name: 'license',
    message: 'White license is used for this project?',
    choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'Hippocratic', 'IBM', 'ISC', 'MIT', 'Mozilla', 'OCD BY', 'OCDbL', 'PDDL', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib'],
        validate: choicesLength => {
            if(choicesLength.length <= 1) {
                return true;
            } else {
                console.log("You must provide a response")
                return false;
            }
        }
    },
    {type: 'input',
    name: 'repo',
    message: 'What is your GitHub username (Required)',
        validate: repo => {
            if(repo) {
                return true;
            } else {
                console.log("You must provide a response")
                return false;
            }
        }
    },
    {type: 'input',
    name: 'email',
    message: 'What is your e-mail address (Required)',
        validate: email => {
            if(email) {
                return true;
            } else {
                console.log("You must provide a response")
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your README has been generated!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        const fileName = answer.title;
        writeToFile(fileName, answer);
    })
}

// Function call to initialize app
init();
