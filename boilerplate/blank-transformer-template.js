import { RAW_KEYS } from "../constants";

/**
 * ## What is it?
 * From the raw JSON `data` array that is passed into this pure function, an Object of any shape should be returned
 *
 * ## How do I test it?
 * The result of this fn should be snapshot tested in an adjacent test file to ensure any regressions are flagged / handled as needed
 *
 * ## What else needs to be udpated?
 * - [ ] Create this transformer in src/transforms/expample.js
 * - [ ] Create the test file in src/transforms/expample.test.js. This should at least snapshot the response to test whether results are deterministic, see below for a template.
 * - [ ] Import and export transformer in `src/transforms/index.js`
 * - [ ] Add reference name as a constant to `TRANSFORMED_KEYS` in `src/constants.js`
 */

export default function transform({ data }) {
  console.log(data[0][RAW_KEYS.FitnessDiscipline]);
  return {
    example: "response",
  };
}

// Remove this once its been copied to an adjacent test file
/*
import transformer from "./top-instructors";
import TEST_DATA from "../data/workouts.json";

describe("transform()", () => {
  test("Calculate number of classes by instructor name", async () => {
    const transformed = transformer({ data: TEST_DATA });
    console.log(transformed) // Useful while iterating, remove when results look correct
    expect(true).toBe(true) // Useful while iterating, remove when results look correct
    // expect(transformed).toMatchInlineSnapshot(); // Enable this once transformer is working as expected to protect against regression
  });
});
*/