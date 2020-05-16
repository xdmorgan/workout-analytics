import transformer from "./top-instructors";
import TEST_DATA from "../data/workouts.json";

describe("transform()", () => {
  test("Calculate number of classes by instructor name", async () => {
    const transformed = transformer({ data: TEST_DATA });
    expect(transformed).toMatchInlineSnapshot(`
      Object {
        "aggregated": Object {
          "byDiscipline": Object {
            "Cycling": Object {
              "Alex Toussaint": 37,
              "Ally Love": 15,
              "Ben Alldis": 21,
              "Christine D'Ercole": 4,
              "Cody Rigsby": 5,
              "Cycling Instructors 2019": 1,
              "Denis Morton": 3,
              "Emma Lovewell": 18,
              "Hannah Frankson": 4,
              "Hannah Marie Corbin": 14,
              "Jenn Sherman": 3,
              "Jennifer Jacobs": 4,
              "Jess King": 5,
              "Kendall Toole": 3,
              "Leanne Hainsby": 11,
              "Matt Wilpers": 6,
              "Olivia Amato": 6,
              "Robin Arzon": 5,
              "Sam Yo": 3,
              "Tunde Oyeneyin": 2,
            },
            "Stretching": Object {
              "Alex Toussaint": 21,
              "Ally Love": 13,
              "Becs Gentry": 1,
              "Ben Alldis": 23,
              "Christine D'Ercole": 4,
              "Cody Rigsby": 15,
              "Denis Morton": 7,
              "Emma Lovewell": 18,
              "Hannah Frankson": 6,
              "Hannah Marie Corbin": 14,
              "Irene Scholz": 3,
              "Jenn Sherman": 6,
              "Jennifer Jacobs": 7,
              "Jess King": 8,
              "Kendall Toole": 6,
              "Leanne Hainsby": 12,
              "Matt Wilpers": 6,
              "Oliver Lee": 1,
              "Olivia Amato": 8,
              "Robin Arzon": 10,
              "Sam Yo": 9,
              "Tunde Oyeneyin": 3,
            },
          },
          "totals": Object {
            "Alex Toussaint": 58,
            "Ally Love": 28,
            "Becs Gentry": 1,
            "Ben Alldis": 44,
            "Christine D'Ercole": 8,
            "Cody Rigsby": 20,
            "Cycling Instructors 2019": 1,
            "Denis Morton": 10,
            "Emma Lovewell": 36,
            "Hannah Frankson": 10,
            "Hannah Marie Corbin": 28,
            "Irene Scholz": 3,
            "Jenn Sherman": 9,
            "Jennifer Jacobs": 11,
            "Jess King": 13,
            "Kendall Toole": 9,
            "Leanne Hainsby": 23,
            "Matt Wilpers": 12,
            "Oliver Lee": 1,
            "Olivia Amato": 14,
            "Robin Arzon": 15,
            "Sam Yo": 12,
            "Tunde Oyeneyin": 5,
          },
        },
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
