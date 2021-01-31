import pages from '.';

export function checkMetaExportStructure(meta, ex) {
  ex(typeof meta.route).toEqual('string');
  ex(typeof meta.title).toEqual('string');
  ex(typeof meta.component).toEqual('function');
  ex(typeof meta.protected).toEqual('boolean');
  if (meta.pagination) {
    ex(typeof meta.pagination).toEqual('object');
    ex(typeof meta.pagination.previous).toBeDefined();
    ex(typeof meta.pagination.next).toBeDefined();
  }
  ex(meta.sidebar).toBeDefined();
}

describe('Page data config', () => {
  test.each(Object.entries(pages))(
    'Ensure %p page has valid metadata',
    async (name, meta) => checkMetaExportStructure(meta, expect)
  );

  test('Should not have changed', () => {
    expect(pages).toMatchInlineSnapshot(`
      Object {
        "/": Object {
          "component": [Function],
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
        "/average-metrics": Object {
          "component": [Function],
          "pagination": Object {
            "next": null,
            "previous": "/outputs",
          },
          "protected": true,
          "route": "/average-metrics",
          "sidebar": "Average Metrics",
          "title": "Average Metrics",
        },
        "/how-to": Object {
          "component": [Function],
          "protected": false,
          "route": "/how-to",
          "sidebar": null,
          "title": "How-to Guide",
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
            "next": "/average-metrics",
            "previous": "/instructors",
          },
          "protected": true,
          "route": "/outputs",
          "sidebar": "Cycling Outputs",
          "title": "Cycling Outputs",
        },
        "/styleguide": Object {
          "component": [Function],
          "protected": false,
          "route": "/styleguide",
          "sidebar": null,
          "title": "Styleguide",
        },
        "/styleguide/buttons": Object {
          "component": [Function],
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
