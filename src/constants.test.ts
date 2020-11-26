import * as CONSTANTS from './constants';

describe('constants', () => {
  test('exports and their values have not changed', () => {
    expect(CONSTANTS).toMatchInlineSnapshot(`
      Object {
        "APP_VERSION": 1,
        "CYCLING_DISCIPLINE": "Cycling",
        "LOCAL_STORAGE_KEY": "workout-data-v1",
      }
    `);
  });
});
