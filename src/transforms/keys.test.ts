import * as TRANSFORMED_KEYS from './keys';

describe('constants', () => {
  test('TRANSFORMED_KEYS have not changed', () => {
    expect(TRANSFORMED_KEYS).toMatchInlineSnapshot(`
      Object {
        "ActivityCalendar": "activity-calendar",
        "AverageMetrics": "average-metrics",
        "CyclingOutputs": "cycling-outputs",
        "HelloDaniel": "hello-daniel",
        "TopInstructors": "top-instructors",
        "TotalWorkouts": "total-workouts",
      }
    `);
  });
});
