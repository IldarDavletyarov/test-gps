export const coordsFormat = (coords, fraction, separator) => {
  return coords.map(_ => _.toFixed(fraction)).join(separator);
};
