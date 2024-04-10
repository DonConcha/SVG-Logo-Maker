const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./assets/js/generateHTML");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter 3 characters to create your logo',
      name: 'characters',
      validate: function(value) {
        if (value.length === 3) {
          return true;
        } else {
          return 'Please enter 3 characters';
        }
      }
    },
    {
      type: 'input',
      message: 'Enter a color or hex for your text',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Select circle, triangle, or square',
      name: 'shape',
      choices: ['triangle', 'circle', 'square']
    },
    {
      type: 'input',
      message: 'Enter a color or hex for your shape',
      name: 'shapeColor'
    }
  ])
  .then((answers) => {
    const fileContents = generateHTML(answers);
    fs.writeFile(`logo_${answers.shape}.svg`, fileContents, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  });