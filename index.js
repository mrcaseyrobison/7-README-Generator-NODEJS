// Required Packages
const inquirer = require('inquirer')
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Questions array with inquirer prompt
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project? (Required)",
      validate: title => {
        if(title) {
            return true;
        } else {
            console.log("It is required that you provide the name of your project.")
            return false;
        }
    } 
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a detailed description of your project (Required)",
      validate: description => {
        if(description) {
            return true;
        } else {
            console.log("A description of your project is required.")
            return false;
        }
    }
    },
    {
      type: "input",
      name: "install",
      message: "Please provide any installation instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide the main use case for this project. (Required)",
      validate: usage => {
        if(usage) {
            return true;
        } else {
            console.log("The main use case for this project is required.")
            return false;
        }
    }
    },
    {
      type: "list",
      name: "license",
      message: "Which license is used for this project? Please choose one.",
      choices: [
        "No License",
        "Apache",
        "Boost",
        "BSD",
        "Creative Commons",
        "Eclipse",
        "GNU",
        "Hippocratic",
        "IBM",
        "ISC",
        "MIT",
        "Mozilla",
        "OCD BY",
        "OCDbL",
        "PDDL",
        "Perl",
        "SIL",
        "Unlicense",
        "WTFPL",
        "Zlib",
      ],
      validate: license => {
        if(license) {
            return true;
        }
    }
    },
    {
      type: "input",
      name: "repo",
      message: "What is your GitHub username? (Required)",
      validate: repo => {
        if(repo) {
            return true;
        } else {
            console.log("You must provide your GitHub username .")
            return false;
        }
    }
    },
    {
      type: "input",
      name: "email",
      message: "What is your e-mail address?",
    },
  ])

  .then((answers) => {
    const README = generateMarkdown(answers);
    fs.writeFile("./dist/generated_readme.md", README, (err) =>
      err ? console.log(err) : console.log("Readme Successfully Generated")
    );
  });

