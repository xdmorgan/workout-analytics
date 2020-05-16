import transformer from "./top-instructors";
import TEST_DATA from "../data/workouts.json";

describe("transform()", () => {
  test("Convert raw data to calendar friendly format", async () => {
    const transformed = transformer({ data: TEST_DATA });
    expect(transformed).toMatchInlineSnapshot(`
      Object {
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
      }
    `);
  });
});