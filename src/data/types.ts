/**
 * Raw Data shape
 * ------------------------------------------------------------
 * There's probably a better way to do this but iono :shrug:
 */
import * as keys from './keys';

// Each item in the raw data
export type RawDataEntry = {
  [keys.WorkoutTimestamp]: string;
  [keys.LiveOnDemand]: string;
  [keys.InstructorName]: string;
  [keys.LengthInMinutes]: number;
  [keys.FitnessDiscipline]: string;
  [keys.Type]: string;
  [keys.Title]: string;
  [keys.ClassTimestamp]: string;
  [keys.TotalOutput]: number;
  [keys.AverageWatts]: number;
  [keys.AverageResistance]: string;
  [keys.AverageCadenceRPM]: number;
  [keys.AverageSpeedMPH]: number;
  [keys.DistanceInMiles]: number;
  [keys.CaloriesBurned]: number;
  [keys.AverageHeartrate]: string;
  [keys.AverageIncline]: string;
  [keys.AveragePace]: string;
};

// The raw data (CSV converted to JSON)
export type RawData = RawDataEntry[];
