import {
  getMinimumDate,
  isInRange,
  subtractDays,
  filterByRange,
  RANGE_TYPES,
} from "./date-range";

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

describe("filterByRange()", () => {
  test("filter future dates", async () => {
    const { filtered } = filterByRange({
      dates: ["2020-01-31", "2020-01-30", "2020-02-28", "2020-03-31"],
      from: "2020-02-29",
      length: RANGE_TYPES.thirtyDays,
    });
    expect(filtered).toEqual(["2020-01-31", "2020-01-30", "2020-02-28"]);
  });
  test("filter past dates", async () => {
    const { filtered } = filterByRange({
      dates: ["2020-01-31", "2020-01-30", "2020-02-28", "2020-03-31"],
      from: "2020-04-20",
      length: RANGE_TYPES.thirtyDays,
    });
    expect(filtered).toEqual(["2020-03-31"]);
  });
});
