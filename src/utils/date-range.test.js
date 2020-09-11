import { getMinimumDate, isInRange, subtractDays } from "./date-range";

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

describe("subtractDays()", () => {
  test("subtracts days innit", async () => {
    expect(subtractDays("2020-01-31", 10)).toBe("2020-01-21");
    expect(subtractDays("2020-01-31", 30)).toBe("2020-01-01");
    expect(subtractDays("2020-01-31", 365)).toBe("2019-01-31");
  });
});

describe("subtractDays()", () => {
  test("subtracts days innit", async () => {
    expect(subtractDays("2020-01-31", 10)).toBe("2020-01-21");
  });
});

describe("getMinimumDate()", () => {
  test("finds minimum in arrayy", async () => {
    expect(
      getMinimumDate(["2020-01-31", "2020-01-30", "2020-02-28", "2020-03-31"])
    ).toBe("2020-01-30");
  });
});

// from an array of 'dates' (probs via object.keys), an 'end' date, and a 'range'
// e.g. dates = ["2020-01-31", "2020-01-30", "2020-02-28", "2020-03-31"] & end = "2020-09-10" & range = RANGE_TYPES.ninetyDays
// getMinimumDate() in dates (historyStart: "2020-01-30")
// if range is 'all', use the earliest date in `dates` (rangeStart: historyStart)
// else 'rangeStart' = subtractDays('end', 'range')
// next, getMinimumDate(['historyStart', 'rangeStart']) then keep the one that _isn't_ the minimum (the max) as 'start'
// now, with the 'start' and 'end' of the range calculated, `filter()` the `dates` by `isInRange`
