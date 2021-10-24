// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    //Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }   else {
                console.log('You need to enter a title for your README.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the README',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }   else {
                console.log('You need to enter a description.');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            }   else {
                console.log('You need to enter the installation process.')
                return false;
            }
        }
    }
];

const promptUser = () => {
    return inquirer.prompt(questions)
};

const data = []

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been created!")
    })
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then(generateMarkdown)
    .then(writeToFile)
}

// Function call to initialize app
init();
