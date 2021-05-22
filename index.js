// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// const writeFileAsync = utils.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [{message: "\033[32mWhat is your GitHub username? -- : ", name: 'gitHubName', type: 'input'},
                    {message:"\033[32mWhat is your Email address? -- : ", name: 'eMail', type: 'input',validate: function (eMail) {
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)
                        if (valid) {
                            return true;
                        } else {
                            console.log("\033[31m  <-- Please enter a valid email")  
                            return false;
                        } },
                    },
                    {message:"\033[32mWhat is your Project's name? -- : ", name: 'projectName', type: 'input'},
                    {message:"\033[32mShort description of your project -- : ",name: 'projectDescription', type: 'input'},
                    {message:"\033[32mWhat type of license your project have? -- : ", choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'], name: 'licenseType', type: 'list'},
                    {message:"\033[32mWhat command should be used to install dependencies? -- : ", name: 'commandInstall', type: 'input', default: "npm install"},
                    {message:"\033[32mWhat command should be run to run tests? -- : ",name: 'commandTest', type: 'input',default: "Console.log"},
                    {message:"\033[32mWhat does the users need to know about this repo? -- : ", name: 'aboutRepo', type: 'input'},
                    {message:"\033[32mWhat does the user need to know about contributing to the repo? -- : ",name: 'aboutContribution', type: 'input'},
                ];
// TODO: Create a function to write README file
async function writeToFile(readmeMD) {
    fs.writeFile('README.md', readmeMD, (err) =>
    err ? console.log(err) : console.log('\033[42mSuccess!')
    )}

// TODO: Create a function to initialize app
async function init() {
    try{
       await inquirer.prompt(questions)
         .then((answers) => {
         writeToFile(generateMarkdown(answers))
        })
    } catch(err) {
        console.log(err)
    }
}

// Function call to initialize app
 init();