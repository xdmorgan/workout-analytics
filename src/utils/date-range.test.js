import { getRangeEnd, isInRange } from "./date-range";

describe("isInRange()", () => {
  const hindsight = { start: "2020-01-01", end: "2020-12-31" };

  test("inclusive at the start of the range", async () => {
    expect(isInRange(hindsight, hindsight.start)).toBe(true);
  });
  test("inclusive at the end of the range", async () => {
    expect(isInRange(hindsight, hindsight.end)).toBe(true);
  });
  test("some rando in between", async () => {
    expect(isInRange(hindsight, "2020-08-30")).toBe(true);
  });

  test("does not include day before range start", async () => {
    expect(isInRange(hindsight, "2019-12-31")).toBe(false);
    // fake day immediately before start of year too
    expect(isInRange(hindsight, "2020-01-00")).toBe(false);
  });
  test("does not include day after range end", async () => {
    // first day of 2021
    expect(isInRange(hindsight, "2021-01-01")).toBe(false);
    // fake date immediately afer range
    expect(isInRange(hindsight, "2021-12-32")).toBe(false);
  });
});
