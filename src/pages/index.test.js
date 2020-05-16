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
      "/": Object {
        "component": [Function],
        "route": "/",
        "sidebar": null,
        "title": "Welcome",
      },
      "/activity": Object {
        "component": [Function],
        "pagination": Object {
          "next": "/instructors",
          "previous": "/totals",
        },
        "route": "/activity",
        "sidebar": "Activity",
        "title": "Activity",
      },
      "/instructors": Object {
        "component": [Function],
        "pagination": Object {
          "next": null,
          "previous": "/activity",
        },
        "route": "/instructors",
        "sidebar": "Favorite Instructors",
        "title": "Favorite Instructors",
      },
      "/styleguide": Object {
        "component": [Function],
        "route": "/styleguide",
        "sidebar": null,
        "title": "Styleguide",
      },
      "/totals": Object {
        "component": [Function],
        "pagination": Object {
          "next": "/activity",
          "previous": null,
        },
        "route": "/totals",
        "sidebar": "Totals",
        "title": "Combined Totals",
      },
    }
  `);
});
