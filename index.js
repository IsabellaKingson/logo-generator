// Bringing in the inquirer dependency, the file system, and SVG
const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require("./lib/svg");

// Prompt questions for the inquirer
const questions = [
  {
    type: "input",
    message: "Please enter 3 characters for your logo:",
    name: "text",
    validate: function (input) {
      if (input.length === 3) {
        return true;
      } else {
        return 'Please enter 3 characters';
      }
    },
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
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "What background color would you like?",
    name: "scolor",
  },
];

// Runs the inquirer taking in the user response and returning the svg file for their logo
inquirer.prompt(questions).then((response) => {
  fs.writeFile(
    "logo.svg",
    SVG(response.text, response.tcolor, response.shape, response.scolor),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated logo.svg");
      }
    }
  );
});
