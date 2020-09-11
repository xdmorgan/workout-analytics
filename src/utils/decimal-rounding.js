// TODO: ...mutiply by 10 instead
const PLACES = [1, 10, 100, 1000, 10000, 100000, 1000000];
export const toDecimalPlaces = (val, places = 0) =>
  Math.floor(val * PLACES[places]) / PLACES[places];
