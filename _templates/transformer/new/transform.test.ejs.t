---
to: src/transforms/<%=name%>.test.ts
---
import transform from "./<%=name%>";
import TEST_DATA from "../data/workouts";

describe("transform()", () => {
  test("Example test", async () => {
    const transformed = transform({ data: TEST_DATA });
    expect(transformed).toMatchInlineSnapshot(`{}`);
  });
});
