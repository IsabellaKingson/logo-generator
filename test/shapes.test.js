const shapes = require("../lib/shapes.js");
const Circle = shapes.Circle;
const Triangle = shapes.Triangle;
const Square = shapes.Square;
describe("shapes", () => {
  describe("circle", () => {
    it("should take recieve a color and output the shape svg", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        "<cirle cx='150' cy='100' r='90' fill='blue' />"
      );
    });
  });
  describe("triangle", () => {
    it("should take recieve a color and output the shape svg", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        "<polygon points='10,10 150,190 290,10' fill='blue' />"
      );
    });
  });
  describe("square", () => {
    it("should take recieve a color and output the shape svg", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        "<rect width='180' height='180' fill='blue' />"
      );
    });
  });
});
