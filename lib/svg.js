// Brings in all the classes made in the text and shapes files
const shapes = require("../lib/shapes");
const text = require("../lib/text");
const Text = text;
const Circle = shapes.Circle;
const Triangle = shapes.Triangle;
const Square = shapes.Square;

// Function that puts the shape and text svg into one svg formatted literal
const SVG = function (text, tcolor, shape, scolor) {
  let logoShape;
  if (shape === "Circle") {
    logoShape = new Circle();
  } else if (shape === "Triangle") {
    logoShape = new Triangle();
  } else if (shape === "Square") {
    logoShape = new Square();
  }
  logoShape.setColor(scolor);
  const logoShapeSVG = logoShape.render();
  const logoText = new Text();
  logoText.setText(text);
  logoText.setColor(tcolor);
  const logoTextSVG = logoText.render();

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${logoShapeSVG}
  ${logoTextSVG}
  </svg>`;
};

// Exports the SVG function so the file can be generated following user response to the inquirer
module.exports = SVG;
