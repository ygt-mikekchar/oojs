
const Rect = (pos, length, height) => {
  return {
    show: () => {
      return {pos: pos.show(), length: length, height: height};
    },
    area: () =>
      length * height,
    translate: (dx, dy) =>
      pos.translate(dx, dy)
  };
};

module.exports = Rect;
