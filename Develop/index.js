// TODO: Include packages needed for this application
import fileSystem from 'fs'
import inquirer from 'inquirer';
import { getMarkdown } from './utils/generateMarkdown.js'


// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the TITLE of your new README file?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for the application:',
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Provide the application\'s installation instructions:',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Provide the application\'s usage information:',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Provide the application\'s contribution guidelines:',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'If applicable, provide any test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license to add to your application:',
        // Licenses list: IBM, MIT, Mozilla, WTFPL
        choices: ['IBM', 'MIT', 'Mozilla', 'WTFPL'],
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'Enter your Github Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
])
    .then(answers => {
        const readmeFile = getMarkdown(answers)
        fileSystem.writeFile(`../markdowns/${answers.title}.md`, readmeFile, err => {
            if (err) {
                throw err
            }
            console.log(`${answers.title}.md saved!`)
        })
    })
    .catch(err => console.log(err))

// // TODO: Create a function to write README file


// // // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
