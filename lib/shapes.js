const shapes = function (response) {
  if (response.shape === "Circle") {
    return `<svg width="300" height="200"><cirle cx='150' cy='100' r='90' fill=${response.scolor} /><text x='150' y='100' fill=${response.tcolor}>${response.text}</text></svg>`;
  } else if (response.shape === "Triangle") {
    return `<svg width="300" height="200"><polygon points='10,10 150,190 290,10' fill=${response.scolor} /><text x='150' y='100' fill=${response.tcolor}>${response.text}</text></svg>`;
  } else if (response.shape === "Square") {
    return `<svg width="300" height="200"><rect width='180' height='180' fill=${response.scolor} /><text x='150' y='100' fill=${response.tcolor}>${response.text}</text></svg>`;
  }
};
module.exports = shapes;
