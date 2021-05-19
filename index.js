// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const writeFileAsync = utils.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [{
        message: "What is your GitHub username? -- : ",
        name: 'gitHubName',
        type: 'input'
    },
    {
        message: "What is your Email address? -- : ",
        name: 'eMail',
        type: 'input'
    },
    {
        message: "What is your Project's name? -- : ",
        name: 'projectName',
        type: 'input'
    },
    {
        message: "Short description of your project -- : ",
        name: 'projectDescription',
        type: 'input'
    },
    {
        message: "What type of license your project have? -- : ",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'licenseType',
        type: 'list'
    },
    {
        message: "What command should be used to install dependencies? -- : ",
        name: 'commandInstall',
        type: 'input',
        default: "npm install"
    },
    {
        message: "What command should be run to run tests? -- : ",
        name: 'commandTest',
        type: 'input',
        default: "Console.log"
    },
    {
        message: "What does the users need to know about this repo? -- : ",
        name: 'aboutRepo',
        type: 'input'
    },
    {
        message: "What does the user need to know about contributing to the repo? -- : ",
        name: 'aboutContribution',
        type: 'input'
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {


}

// TODO: Create a function to initialize app
async function init() {
    try {
        await inquirer.prompt(questions)
            .then((data) => {
                // console.log('Data =:', data)
                generateMarkdown(data)
            })
    } catch (e) {
        console.log(e.message)
    }
}

// Function call to initialize app





init();