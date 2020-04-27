import totalWorkouts from "./total-workouts";
import activityCalendar from "./activity-calendar";

/**
 * Given raw workout data as a json object and a collection of transformers (as name: function pairs),
 * return an object of shape { transformer-name: transformed-data-object } for use in charts on site.
 *
 * Example usage:
 *
 * const allChartData = transform({ data: jsonWorkoutData, transformers: dataTransformations })

 */
export function transform({ data, transformers }) {
  return Object.entries(transformers).reduce((acc, [name, func]) => {
    acc[name] = func({ data });
    return acc;
  }, {});
}

/**
 * Key constants, these will surely change at some point
 */

export const KEY_NAMES = {
  WorkoutTimestamp: "Workout Timestamp",
  LiveOnDemand: "Live/On-Demand",
  InstructorName: "Instructor Name",
  LengthInMinutes: "Length (minutes)",
  FitnessDiscipline: "Fitness Discipline",
  Type: "Type",
  Title: "Title",
  ClassTimestamp: "Class Timestamp",
  TotalOutput: "Total Output",
  AverageWatts: "Avg. Watts",
  AverageResistance: "Avg. Resistance",
  AverageCadenceRPM: "Avg. Cadence (RPM)",
  AverageSpeedMPH: "Avg. Speed (mph)",
  DistanceInMiles: "Distance (mi)",
  CaloriesBurned: "Calories Burned",
  AverageHeartrate: "Avg. Heartrate",
  AverageIncline: "Avg. Incline",
  AveragePace: "Avg. Pace (min/mi)",
};

/**
 * Create a key value mapping of a data transformer to reference name (could match a route slug)
 * each of these functions will get called with the raw workout data json object and should
 * return a pure object response of whatever shape is useful for the consuming chart (done in
 * `transform()` above). This allows for a single, centralized location of data transformations
 * which can be done immediately after converting the user's workout data csv to json. That way,
 * any expensive calculations are done once and ready for immediate use while navigating the app.
 */
export default {
  "total-workouts": totalWorkouts,
  "activity-calendar": activityCalendar,
};
