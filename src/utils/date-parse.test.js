import { parseCSVDate } from "./date-parse";

describe("parseCSVDate()", () => {
  // this is only necessary becuase this format throws in Safari.
  // it works in at least chrome. For better—especially mobile
  // support, just run it through date-fns
  test("parses dates provided by CSV", async () => {
    expect(parseCSVDate("2019-02-14 18:34 (EDT)").toUTCString()).toBe(
      "Thu, 14 Feb 2019 18:34:00 GMT"
    );
  });
});
