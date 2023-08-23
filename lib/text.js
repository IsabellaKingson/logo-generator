class Text {
    constructor(text, color) {
      this.text = text;
      this.color = color;
    }
    setColor(color) {
      this.color = color;
    }
    setText(text) {
        this.text = text;
    }
    render() {
      return `<text x='150' y='100' fill='${this.color}'>${this.text}</text>`;
    }
  }
  module.exports = Text;