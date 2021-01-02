import transformer from './top-instructors';
import TEST_DATA from '../data/workouts';

describe('transform()', () => {
  test('Calculate number of classes by instructor name', async () => {
    const transformed = transformer({ data: TEST_DATA });
    expect(transformed).toMatchInlineSnapshot(`
      Object {
        "chartData": Object {
          "Cycling": Array [
            Object {
              "id": "Cody Rigsby",
              "value": 5,
            },
            Object {
              "id": "Ally Love",
              "value": 15,
            },
            Object {
              "id": "Matt Wilpers",
              "value": 6,
            },
            Object {
              "id": "Denis Morton",
              "value": 3,
            },
            Object {
              "id": "Jennifer Jacobs",
              "value": 4,
            },
            Object {
              "id": "Jenn Sherman",
              "value": 3,
            },
            Object {
              "id": "Leanne Hainsby",
              "value": 11,
            },
            Object {
              "id": "Emma Lovewell",
              "value": 18,
            },
            Object {
              "id": "Robin Arzon",
              "value": 5,
            },
            Object {
              "id": "Alex Toussaint",
              "value": 37,
            },
            Object {
              "id": "Hannah Marie Corbin",
              "value": 14,
            },
            Object {
              "id": "Jess King",
              "value": 5,
            },
            Object {
              "id": "Ben Alldis",
              "value": 21,
            },
            Object {
              "id": "Olivia Amato",
              "value": 6,
            },
            Object {
              "id": "Cycling Instructors 2019",
              "value": 1,
            },
            Object {
              "id": "Christine D'Ercole",
              "value": 4,
            },
            Object {
              "id": "Tunde Oyeneyin",
              "value": 2,
            },
            Object {
              "id": "Hannah Frankson",
              "value": 4,
            },
            Object {
              "id": "Kendall Toole",
              "value": 3,
            },
            Object {
              "id": "Sam Yo",
              "value": 3,
            },
          ],
          "Stretching": Array [
            Object {
              "id": "Leanne Hainsby",
              "value": 12,
            },
            Object {
              "id": "Matt Wilpers",
              "value": 6,
            },
            Object {
              "id": "Cody Rigsby",
              "value": 15,
            },
            Object {
              "id": "Denis Morton",
              "value": 7,
            },
            Object {
              "id": "Hannah Marie Corbin",
              "value": 14,
            },
            Object {
              "id": "Jennifer Jacobs",
              "value": 7,
            },
            Object {
              "id": "Jenn Sherman",
              "value": 6,
            },
            Object {
              "id": "Emma Lovewell",
              "value": 18,
            },
            Object {
              "id": "Ben Alldis",
              "value": 23,
            },
            Object {
              "id": "Christine D'Ercole",
              "value": 4,
            },
            Object {
              "id": "Ally Love",
              "value": 13,
            },
            Object {
              "id": "Robin Arzon",
              "value": 10,
            },
            Object {
              "id": "Jess King",
              "value": 8,
            },
            Object {
              "id": "Alex Toussaint",
              "value": 21,
            },
            Object {
              "id": "Olivia Amato",
              "value": 8,
            },
            Object {
              "id": "Kendall Toole",
              "value": 6,
            },
            Object {
              "id": "Tunde Oyeneyin",
              "value": 3,
            },
            Object {
              "id": "Hannah Frankson",
              "value": 6,
            },
            Object {
              "id": "Sam Yo",
              "value": 9,
            },
            Object {
              "id": "Becs Gentry",
              "value": 1,
            },
            Object {
              "id": "Irene Scholz",
              "value": 3,
            },
            Object {
              "id": "Oliver Lee",
              "value": 1,
            },
          ],
        },
      }
    `);
  });
});
