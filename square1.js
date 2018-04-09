
const Rect = require("rect1.js");

const Square = (pos, length) => {
  const rect = Rect(pos, length, length);
  return {
     ...rect,
    show: () =>
      ({pos: pos.show(), length}),
    translate: (dx, dy) =>
      Square(pos.translate(dx, dy), length)
  };
};

module.exports = Square;
