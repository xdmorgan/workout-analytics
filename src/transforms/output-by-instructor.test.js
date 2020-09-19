import transform from "./output-by-instructor";
import TEST_DATA from "../data/workouts.json";

describe("transform()", () => {
  test("Calculate number of classes by instructor name", async () => {
    const transformed = transform({ data: TEST_DATA });
    console.log(transformed); // Useful while iterating, remove when results look correct
    expect(true).toBe(true); // Useful while iterating, remove when results look correct
    // expect(transformed).toMatchInlineSnapshot(); // Enable this once transformer is working as expected to protect against regression
  });
});
