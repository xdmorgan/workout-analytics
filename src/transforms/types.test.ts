import { TRANSFORMED_KEYS } from './types';

describe('constants', () => {
  test('TRANSFORMED_KEYS have not changed', () => {
    expect(TRANSFORMED_KEYS).toMatchInlineSnapshot(`
      Object {
        "ActivityCalendar": "activity-calendar",
        "AverageMetrics": "average-metrics",
        "CyclingOutputs": "cycling-outputs",
        "TopInstructors": "top-instructors",
        "TotalWorkouts": "total-workouts",
      }
    `);
  });
});
