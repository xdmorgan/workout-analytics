import totalWorkouts from "./total-workouts";

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
 * Create a key value mapping of a data transformer to reference name (could match a route slug)
 * each of these functions will get called with the raw workout data json object and should
 * return a pure object response of whatever shape is useful for the consuming chart (done in
 * `transform()` above). This allows for a single, centralized location of data transformations
 * which can be done immediately after converting the user's workout data csv to json. That way,
 * any expensive calculations are done once and ready for immediate use while navigating the app.
 */
export default {
  "total-workouts": totalWorkouts,
};
