const Text = require("../lib/text.js");

describe("Text", () => {
  it("should take a text value and a color value and return the svg", () => {
    const logo = new Text();
    logo.setColor("blue");
    logo.setText("RGB");
    expect(logo.render()).toEqual(
      "<text x='150' y='100' text-anchor='middle' dominant-baseline='middle' font-size='80px' fill='blue'>RGB</text>"
    );
  });
});
