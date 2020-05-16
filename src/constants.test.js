import { RAW_KEYS, TRANSFORMED_KEYS } from "./constants";

describe("constants", () => {
  test("RAW_KEYS have not changed", () => {
    expect(RAW_KEYS).toMatchInlineSnapshot(`
      Object {
        "AverageCadenceRPM": "Avg. Cadence (RPM)",
        "AverageHeartrate": "Avg. Heartrate",
        "AverageIncline": "Avg. Incline",
        "AveragePace": "Avg. Pace (min/mi)",
        "AverageResistance": "Avg. Resistance",
        "AverageSpeedMPH": "Avg. Speed (mph)",
        "AverageWatts": "Avg. Watts",
        "CaloriesBurned": "Calories Burned",
        "ClassTimestamp": "Class Timestamp",
        "DistanceInMiles": "Distance (mi)",
        "FitnessDiscipline": "Fitness Discipline",
        "InstructorName": "Instructor Name",
        "LengthInMinutes": "Length (minutes)",
        "LiveOnDemand": "Live/On-Demand",
        "Title": "Title",
        "TotalOutput": "Total Output",
        "Type": "Type",
        "WorkoutTimestamp": "Workout Timestamp",
      }
    `);
  });
  test("TRANSFORMED_KEYS have not changed", () => {
    expect(TRANSFORMED_KEYS).toMatchInlineSnapshot(`
      Object {
        "ActivityCalendar": "activity-calendar",
        "TopInstructors": "top-instructors",
        "TotalWorkouts": "total-workouts",
      }
    `);
  });
});
