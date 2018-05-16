
const Rect = require("mutable_rect.js");

const Square = (pos, length) => {
  const rect = Rect(pos, length, length);
  return {
     ...rect,
    show: () =>
      ({pos: pos.show(), length})
  };
};

module.exports = Square;
