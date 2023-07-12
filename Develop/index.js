// Application Packages
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// User Questions
const questions = [{
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
    inquirer
  .prompt(
    // Question prompting
  questions)
  .then((answers) => {
    // Answers
    console.log(answers) 
    writeToFile('README.md', generateMarkdown({ ...answers }))
  })
  .catch((error) => {
    if (error.isTtyError) { console.log(error)
      // Prompt Rendering Environment Issues
    } else {
        console.log('somethingelse')
    }
  });
    // inquirer.prompt(questions).then((data) => {console.log('generating')})
    // writeToFile('README.md', generateMarkdown({ ...data })) 
}

// App Initialization Function Call
init();
