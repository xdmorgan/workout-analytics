export const toDecimalPlaces = (val: number, places: number = 0) =>
  Math.floor(val * 10 ** places) / 10 ** places;
