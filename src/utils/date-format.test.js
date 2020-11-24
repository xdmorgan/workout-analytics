import { format } from "./date-format";

describe("format()", () => {
  test("parses formats date for charts", async () => {
    expect(format(new Date("12/31/99"))).toBe("1999-12-31");
    expect(format(new Date("1/1/2020"))).toBe("2020-01-01");
  });
});
