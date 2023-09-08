// Class for rendering the text to the logo
class Text {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  // Takes user input to set the text color
  setColor(color) {
    this.color = color;
  }
  // Takes the user's input to set the text value
  setText(text) {
    this.text = text;
  }
  // Takes all the the previous inputs and renders them with svg syntax
  render() {
    return `<text x='150' y='100' text-anchor='middle' dominant-baseline='middle' font-size='80px' fill='${this.color}'>${this.text}</text>`;
  }
}

// Exporting the text class to be used by the svg.js file
module.exports = Text;
