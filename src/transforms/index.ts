import { RawData } from '../data/types';

import * as keys from './keys';
import totalWorkouts from './total-workouts';
import activityCalendar from './activity-calendar';
import topInstructors from './top-instructors';
import cyclingOutputs from './cycling-outputs';
import averageMetrics from './average-metrics';
// CODEGEN -- INJECT_TRANSFORMER_NEW_IMPORT

/**
 * Constants & types.
 * ------------------------------------------------------------
 * Create a key value mapping of a data transformer to reference name (could match a route slug)
 * each of these functions will get called with the raw workout data json object and should
 * return a pure object response of whatever shape is useful for the consuming chart (done in
 * `transform()` below). This allows for a single, centralized location of data transformations
 * which can be done immediately after converting the user's workout data csv to json. That way,
 * any expensive calculations are done once and ready for immediate use while navigating the app.
 *
 * Do not move or delete the "// CODEGEN -- ..." comments, they're used by the Hygen `codegen:x`
 * scripts. See README/docs for more info.
 */
const all = {
  [keys.TotalWorkouts]: totalWorkouts,
  [keys.ActivityCalendar]: activityCalendar,
  [keys.TopInstructors]: topInstructors,
  [keys.CyclingOutputs]: cyclingOutputs,
  [keys.AverageMetrics]: averageMetrics,
  // CODEGEN -- INJECT_TRANSFORMER_NEW_FUNCTION
};

// all transform functions
export interface Transformers {
  [keys.TotalWorkouts]?: typeof totalWorkouts;
  [keys.ActivityCalendar]?: typeof activityCalendar;
  [keys.TopInstructors]?: typeof topInstructors;
  [keys.CyclingOutputs]?: typeof cyclingOutputs;
  [keys.AverageMetrics]?: typeof averageMetrics;
  // CODEGEN -- INJECT_TRANSFORMER_NEW_FUNCTION_TYPE
}

// all transform functions
export interface Transformed {
  [keys.TotalWorkouts]?: ReturnType<typeof totalWorkouts>;
  [keys.ActivityCalendar]?: ReturnType<typeof activityCalendar>;
  [keys.TopInstructors]?: ReturnType<typeof topInstructors>;
  [keys.CyclingOutputs]?: ReturnType<typeof cyclingOutputs>;
  [keys.AverageMetrics]?: ReturnType<typeof averageMetrics>;
  // CODEGEN -- INJECT_TRANSFORMER_NEW_RESULT_TYPE
}

export default all;

/**
 * Given raw workout data as a json object and a collection of transformers (as name: function pairs),
 * return an object of shape { transformer-name: transformed-data-object } for use in charts on site.
 * The `transformers` input should be the default export from this file. This function calls each of
 * that object's individual transformer functions and returns the aggregate responses.
 *
 * Example usage:
 * ```js
 * const allChartData = transform({ 
 *    data: jsonWorkoutData, 
 *    transformers: dataTransformations 
 * })
 * ```

 */
export function transform({
  data,
  transformers,
}: {
  data: RawData;
  transformers: Transformers;
}): Transformed {
  return Object.entries(transformers).reduce(
    (acc, [name, func]) => ({
      ...acc,
      [name]: func({ data }),
    }),
    {}
  );
}
