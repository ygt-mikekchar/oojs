
const Point = (x, y) => {
  return {
    show: () => {
      return {x: x, y: y};
    },
    translate: (dx, dy) =>
      Point(x + dx, y + dy)
  };
};

module.exports = Point;
