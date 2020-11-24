import { format } from "./date-format";

describe("format()", () => {
  test("converts date object to YYYYY-MM-DD", async () => {
    expect(format(new Date("12/31/99"))).toBe("1999-12-31");
    expect(format(new Date("1/1/2020"))).toBe("2020-01-01");
  });
});
