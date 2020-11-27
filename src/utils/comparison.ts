export function comparison(
  to: number,
  base: number,
  floor: boolean = true
): [number, boolean] {
  let count = to / base;
  if (floor) count = Math.floor(count);
  const plural = Math.abs(count) === 0 || Math.abs(count) > 1;
  return [count, plural]; // count and pluralize boolean
}

export function toHours(minutes: number) {
  return comparison(minutes, 60);
}

export function toOfficeEpisodes(minutes: number) {
  return comparison(minutes, 22);
}

export function toTitanicMovies(minutes: number) {
  return comparison(minutes, 195);
}

export function toNurburgrings(miles: number) {
  return comparison(miles, 16.12);
}

export function toMarathons(miles: number) {
  return comparison(miles, 26.2);
}

export function toTourDeFrances(miles: number) {
  return comparison(miles, 2200, false);
}

export function toOreos(calories: number) {
  return comparison(calories, 53);
}

export function toBigMacs(calories: number) {
  return comparison(calories, 563);
}

export function toVermonsters(calories: number) {
  return comparison(calories, 14000);
}
