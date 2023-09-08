// Class constructor as the basis for all shapes
class Shape {
  constructor(Color) {
    this.Color = Color;
  }
  // Method to set the background color for all shapes
  setColor(color) {
    this.Color = color;
  }

  // Render method will be different for each shape
  render() {
    return ``;
  }
}

// Circle class with specifications for a circle background
class Circle extends Shape {
  constructor(Color) {
    super(Color);
  }
  // Object literal to take the user input and turn it into svg syntax
  render() {
    return `<circle cx='150' cy='100' r='90' fill='${this.Color}' />`;
  }
}

// Triangle class with specifications for a triangle background
class Triangle extends Shape {
  constructor(Color) {
    super(Color);
  }
  // Object literal to take the user input and turn it into svg syntax
  render() {
    return `<polygon points='150,10 10,190 290, 190' fill='${this.Color}' />`;
  }
}

// Square class with specifications for a square background
class Square extends Shape {
  constructor(Color) {
    super(Color);
  }
  // Object literal to take the user input and turn it into svg syntax
  render() {
    return `<rect width='180' height='180' x='60' y='10' fill='${this.Color}' />`;
  }
}

// Exporting the three background classes to be used by svg.js
module.exports = {
  Circle,
  Triangle,
  Square,
};
