const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
  {
    type: "input",
    message: "Please enter 3 characters for you logo:",
    name: "text",
    // validate: function (input) {
    //     if (input.length === 3)
    // }
  },
  {
    type: "input",
    message: "What is the text color?",
    name: "tcolor",
  },
  {
    type: "list",
    message: "What logo shape would you like?",
    name: "shape",
    options: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: "input",
    message: "Please enter 3 characters for you logo:",
    name: "bcolor",
  },
];

inquirer.prompt(questions).then((response) => {
    fs.writeFile('logo.svg', )
})