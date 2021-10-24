//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
        message: 'Provide a description of the project',
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
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }   else {
                console.log('You need to enter the project usage.')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project:',
        choices: [
            "Apache",
            "Boost",
            "GNU",
            "IBM",
            "MIT",
            "Mozilla",
            "Open Database",
            "None"
        ]
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the guidelines for contributing to this project?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            }   else {
                console.log('You need to enter contribution guidelines.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for the project?',
        validate: testsInput => {
            if (testsInput) {
                return true;
            }   else {
                console.log('Please provide test instructions.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            }   else {
                console.log('Please provide your Github username.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            }   else {
                console.log('Please provide your e-mail address.')
                return false;
            }
        }
    },
];

const promptUser = () => {
    return inquirer.prompt(questions)
};

//Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been created!")
    })
}

// Create a function to initialize app
const init = () => {
    promptUser()
    .then(generateMarkdown)
    .then(writeToFile)
}

// Function call to initialize app
init();
