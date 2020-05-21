export const APP_VERSION = process.env.APP_VERSION || 1;
export const LOCAL_STORAGE_KEY = `workout-data-v${APP_VERSION}`;

/**
 * Key constants, these will surely change at some point
 */

export const RAW_KEYS = {
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
 * Key constants, these will surely change at some point
 */

export const TRANSFORMED_KEYS = {
  TotalWorkouts: "total-workouts",
  ActivityCalendar: "activity-calendar",
  TopInstructors: "top-instructors",
  CyclingOutputs: "cycling-outputs",
};
