// Application Packages
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// User Questions
const questions = [{
    type: 'input',
    name: 'title',
    message:'What is the project title?',
  },
    {
    type: 'input',
    name: 'description',
    message:'Please enter the projects description.',
  },
    {
    type: 'input',
    name: 'installation',
    message:'Please enter the projects installation instructions.',
  },
    {
    type: 'input',
    name: 'contributions',
    message:'Please enter any and all contributions.',
  },
    {
    type: 'input',
    name: 'tests',
    message:'Please enter the test instructions.',
  },
    {
    type: 'list',
    name: 'License',
    message:'Please choose the project license.',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
    {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// ReadMe Function
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// App Initialization Function
function init() {
    inquirer.prompt(questions)
        .then(answers => {
        writeToFile('README.md', generateMarkdown(answers));
        console.log('README.md generated successfully!');
        })
        .catch(error => {
        console.log(error);
        });
    }

// App Initialization Function Call
init();
