
const Rect = (pos, length, height) => {
  return {
    show: () => {
      return {pos: pos.show(), length: length, height: height};
    },
    area: () =>
      length * height,
    translate: (dx, dy) =>
      Rect(pos.translate(dx, dy), length, height)
  };
};

module.exports = Rect;
