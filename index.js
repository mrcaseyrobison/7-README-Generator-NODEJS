// Required Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user
const questions = [
    {type: 'input',
    name: 'Title',
    message: 'What is the name of your project?',
        validate: titleInput => {
            if(titleInput) {
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
function init() {}

// Function call to initialize app
init();
