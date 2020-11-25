import { RawData } from '../data/types';

import totalWorkouts, { key as TotalWorkouts } from './total-workouts';
import activityCalendar, { key as ActivityCalendar } from './activity-calendar';
import topInstructors, { key as TopInstructors } from './top-instructors';
import cyclingOutputs, { key as CyclingOutputs } from './cycling-outputs';
import averageMetrics, { key as AverageMetrics } from './average-metrics';

/**
 * Constants & types.
 * ------------------------------------------------------------
 *
 * When adding a new one, the key name should be
 * defined as a constant and added to the Type and constants
 * exports for global use. This is gonna be a hassle until new
 * transformer creation could be automated and these defined w
 * an AST
 *
 * There's probably a better way to do this but iono :shrug:
 */

// Easier to type key names
export const TRANSFORMED_KEYS = {
  TotalWorkouts,
  ActivityCalendar,
  TopInstructors,
  CyclingOutputs,
  AverageMetrics,
};

// transform functions
export type Transformer = ({
  data,
}: {
  data: RawData;
}) => { [key: string]: any };

// all transform functions
export type Transformers = {
  [TotalWorkouts]: Transformer;
  [ActivityCalendar]: Transformer;
  [TopInstructors]: Transformer;
  [CyclingOutputs]: Transformer;
  [AverageMetrics]: Transformer;
};

// all transform functions
export type Transformed = {
  [TotalWorkouts]: ReturnType<typeof totalWorkouts>;
  [ActivityCalendar]: ReturnType<typeof activityCalendar>;
  [TopInstructors]: ReturnType<typeof topInstructors>;
  [CyclingOutputs]: ReturnType<typeof cyclingOutputs>;
  [AverageMetrics]: ReturnType<typeof averageMetrics>;
};

/**
 * Create a key value mapping of a data transformer to reference name (could match a route slug)
 * each of these functions will get called with the raw workout data json object and should
 * return a pure object response of whatever shape is useful for the consuming chart (done in
 * `transform()` below). This allows for a single, centralized location of data transformations
 * which can be done immediately after converting the user's workout data csv to json. That way,
 * any expensive calculations are done once and ready for immediate use while navigating the app.
 */
const all = {
  [TotalWorkouts]: totalWorkouts,
  [ActivityCalendar]: activityCalendar,
  [TopInstructors]: topInstructors,
  [CyclingOutputs]: cyclingOutputs,
  [AverageMetrics]: averageMetrics,
};

export default all;
