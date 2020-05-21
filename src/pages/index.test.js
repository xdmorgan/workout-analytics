import pages from ".";

describe("pages/index", () => {
  test.each(Object.entries(pages))(
    "Ensure %p page has valid metadata",
    async (name, meta) => {
      expect(typeof meta.route).toEqual("string");
      expect(typeof meta.title).toEqual("string");
      expect(typeof meta.component).toEqual("function");
      expect(typeof meta.pagination).toEqual("object");
      expect(typeof meta.pagination.previous).toBeDefined();
      expect(typeof meta.pagination.next).toBeDefined();
      expect(meta.sidebar).toBeDefined();
    }
  );

  expect(pages).toMatchInlineSnapshot(`
    Object {
      "/": Object {
        "component": [Function],
        "pagination": Object {
          "next": null,
          "previous": null,
        },
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
        "sidebar": "Annual Activity",
        "title": "Annual Activity",
      },
      "/instructors": Object {
        "component": [Function],
        "pagination": Object {
          "next": "/outputs",
          "previous": "/activity",
        },
        "route": "/instructors",
        "sidebar": "Favorite Instructors",
        "title": "Favorite Instructors",
      },
      "/outputs": Object {
        "component": [Function],
        "pagination": Object {
          "next": null,
          "previous": "/instructors",
        },
        "route": "/outputs",
        "sidebar": "Cycling Outputs",
        "title": "Cycling Outputs",
      },
      "/styleguide": Object {
        "component": [Function],
        "pagination": Object {
          "next": null,
          "previous": null,
        },
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
        "sidebar": "Combined Totals",
        "title": "Combined Totals",
      },
    }
  `);
});
