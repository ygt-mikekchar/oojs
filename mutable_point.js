
const Point = (x, y) => {
  const self = {
    show: () =>
      ({x, y}),
    setX: (new_x) =>
      x = new_x,
    setY: (new_y) =>
      y = new_y,
    translate: (dx, dy) => {
      self.setX(x + dx);
      self.setY(y + dy);
      return self;
    }
  };
  return self;
};

module.exports = Point;
