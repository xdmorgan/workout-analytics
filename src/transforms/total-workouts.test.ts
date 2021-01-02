import transformer from './total-workouts';
import TEST_DATA from '../data/workouts';

// TODO: more Jest config later?
// https://developer-log.netlify.app/testing-react-components-with-jest-enzyme-nextjs/
// https://jestjs.io/docs/en/getting-started
describe('transform()', () => {
  test('Convert raw data to calculated totals', async () => {
    const totals = transformer({ data: TEST_DATA });
    expect(totals).toMatchInlineSnapshot(`
      Object {
        "caloriesBurned": Object {
          "byDiscipline": Object {
            "Cycling": 92009,
            "Stretching": 2945,
          },
          "pieChart": Array [
            Object {
              "id": "Cycling",
              "label": "Cycling",
              "value": 92009,
            },
            Object {
              "id": "Stretching",
              "label": "Stretching",
              "value": 2945,
            },
          ],
          "sum": 94954,
        },
        "distanceInMiles": Object {
          "byDiscipline": Object {
            "Cycling": 1931.21,
            "Stretching": 0,
          },
          "pieChart": Array [
            Object {
              "id": "Cycling",
              "label": "Cycling",
              "value": 1931.21,
            },
          ],
          "sum": 1931.21,
        },
        "numberOfWorkouts": Object {
          "byDiscipline": Object {
            "Cycling": 195,
            "Stretching": 201,
          },
          "pieChart": Array [
            Object {
              "id": "Cycling",
              "label": "Cycling",
              "value": 195,
            },
            Object {
              "id": "Stretching",
              "label": "Stretching",
              "value": 201,
            },
          ],
          "sum": 396,
        },
        "timeInMinutes": Object {
          "byDiscipline": Object {
            "Cycling": 5714,
            "Stretching": 1010,
          },
          "pieChart": Array [
            Object {
              "id": "Cycling",
              "label": "Cycling",
              "value": 5714,
            },
            Object {
              "id": "Stretching",
              "label": "Stretching",
              "value": 1010,
            },
          ],
          "sum": 6724,
        },
      }
    `);
  });
});
