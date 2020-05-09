import pages from ".";

describe("pages/index", () => {
  test.each(Object.entries(pages))(
    "Ensure %p page has valid metadata",
    async (name, meta) => {
      expect(typeof meta.route).toEqual("string");
      expect(typeof meta.title).toEqual("string");
      expect(typeof meta.component).toEqual("function");
      expect(meta.sidebar).toBeDefined();
    }
  );

  expect(pages).toMatchInlineSnapshot(`
    Object {
      "Activity Calendar": Object {
        "component": [Function],
        "route": "/activity-calendar",
        "sidebar": "Activity Calendar",
        "title": "Activity Calendar",
      },
      "Styleguide": Object {
        "component": [Function],
        "route": "/styleguide",
        "sidebar": "Styleguide",
        "title": "Styleguide",
      },
      "Welcome": Object {
        "component": [Function],
        "route": "/",
        "sidebar": "Start Over",
        "title": "Welcome",
      },
    }
  `);
});
