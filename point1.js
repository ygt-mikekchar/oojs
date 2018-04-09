
const Point = (x, y) => (
  {
    show: () =>
      ({x, y}),
    translate: (dx, dy) =>
      Point(x + dx, y + dy)
  }
);

module.exports = Point;
