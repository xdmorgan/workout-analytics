import {
  comparison,
  toHours,
  toOfficeEpisodes,
  toTitanicMovies,
  toNurburgrings,
  toMarathons,
  toTourDeFrances,
  toOreos,
  toBigMacs,
  toVermonsters,
} from './comparison';

describe('comparison()', () => {
  test('pluralize it', async () => {
    expect(comparison(1, 1)).toEqual([1, false]);
    expect(comparison(2, 2)).toEqual([1, false]);
    expect(comparison(1, 2)).toEqual([0, true]);
    expect(comparison(1, 2, false)).toEqual([0.5, false]);
    expect(comparison(2, 1)).toEqual([2, true]);
  });
});

describe('toHours()', () => {
  test('pluralize it', async () => {
    expect(toHours(60)).toEqual([1, false]);
    expect(toHours(120)).toEqual([2, true]);
  });
});

describe('toOfficeEpisodes()', () => {
  test('pluralize it', async () => {
    expect(toOfficeEpisodes(10)).toEqual([0, true]);
    expect(toOfficeEpisodes(30)).toEqual([1, false]);
    expect(toOfficeEpisodes(45)).toEqual([2, true]);
  });
});

describe('toTitanicMovies()', () => {
  test('pluralize it', async () => {
    expect(toTitanicMovies(60)).toEqual([0, true]);
    expect(toTitanicMovies(200)).toEqual([1, false]);
    expect(toTitanicMovies(400)).toEqual([2, true]);
  });
});

describe('toNurburgrings()', () => {
  test('pluralize it', async () => {
    expect(toNurburgrings(1)).toEqual([0, true]);
    expect(toNurburgrings(17)).toEqual([1, false]);
    expect(toNurburgrings(34)).toEqual([2, true]);
  });
});

describe('toMarathons()', () => {
  test('pluralize it', async () => {
    expect(toMarathons(1)).toEqual([0, true]);
    expect(toMarathons(27)).toEqual([1, false]);
    expect(toMarathons(54)).toEqual([2, true]);
  });
});

describe('toTourDeFrances()', () => {
  test('pluralize it', async () => {
    expect(toTourDeFrances(1100)).toEqual([0.5, false]);
    expect(toTourDeFrances(2200)).toEqual([1, false]);
    expect(toTourDeFrances(4400)).toEqual([2, true]);
  });
});

describe('toOreos()', () => {
  test('pluralize it', async () => {
    expect(toOreos(1)).toEqual([0, true]);
    expect(toOreos(53)).toEqual([1, false]);
    expect(toOreos(106)).toEqual([2, true]);
  });
});

describe('toBigMacs()', () => {
  test('pluralize it', async () => {
    expect(toBigMacs(1)).toEqual([0, true]);
    expect(toBigMacs(563)).toEqual([1, false]);
    expect(toBigMacs(1126)).toEqual([2, true]);
  });
});

describe('toVermonsters()', () => {
  test('pluralize it', async () => {
    expect(toVermonsters(1)).toEqual([0, true]);
    expect(toVermonsters(14000)).toEqual([1, false]);
    expect(toVermonsters(28000)).toEqual([2, true]);
  });
});
