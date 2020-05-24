import pages from ".";

describe("Page data config", () => {
  test.each(Object.entries(pages))(
    "Ensure %p page has valid metadata",
    async (name, meta) => {
      expect(typeof meta.route).toEqual("string");
      expect(typeof meta.title).toEqual("string");
      expect(typeof meta.component).toEqual("function");
      expect(typeof meta.protected).toEqual("boolean");
      expect(typeof meta.pagination).toEqual("object");
      expect(typeof meta.pagination.previous).toBeDefined();
      expect(typeof meta.pagination.next).toBeDefined();
      expect(meta.sidebar).toBeDefined();
    }
  );

  test("Should not have changed", () => {
    expect(pages).toMatchInlineSnapshot(`
      Object {
        "/": Object {
          "component": [Function],
          "pagination": Object {
            "next": null,
            "previous": null,
          },
          "protected": false,
          "route": "/",
          "sidebar": "Get Started",
          "title": "Welcome",
        },
        "/activity": Object {
          "component": [Function],
          "pagination": Object {
            "next": "/instructors",
            "previous": "/totals",
          },
          "protected": true,
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
          "protected": true,
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
          "protected": true,
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
          "protected": false,
          "route": "/styleguide",
          "sidebar": null,
          "title": "Styleguide",
        },
        "/styleguide/buttons": Object {
          "component": [Function],
          "pagination": Object {
            "next": null,
            "previous": "/styleguide",
          },
          "protected": false,
          "route": "/styleguide/buttons",
          "sidebar": null,
          "title": "Buttons",
        },
        "/totals": Object {
          "component": [Function],
          "pagination": Object {
            "next": "/activity",
            "previous": "/",
          },
          "protected": true,
          "route": "/totals",
          "sidebar": "Combined Totals",
          "title": "Combined Totals",
        },
      }
    `);
  });
});
