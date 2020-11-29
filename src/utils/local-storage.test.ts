import { createSavedSession } from './local-storage';

describe('constants', () => {
  test('RAW_KEYS have not changed', () => {
    createSavedSession([]);
    expect(localStorage).toMatchInlineSnapshot(`
      Storage {
        "workout-data-v1": "[]",
      }
    `);
  });
});
