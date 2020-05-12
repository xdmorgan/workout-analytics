import { RAW_KEYS } from "../constants";

export default function transform({ data }) {
  const numberOfWorkouts = data.length;
  const numberOfWorkoutsByDiscipline = {};
  let [timeInMinutes, distanceInMiles, caloriesBurned] = new Array(3).fill(0);
  for (const workout of data) {
    // use zero fallbacks for empty entries to avoid NaNing yourself
    timeInMinutes += workout[RAW_KEYS.LengthInMinutes] || 0;
    distanceInMiles += workout[RAW_KEYS.DistanceInMiles] || 0;
    caloriesBurned += workout[RAW_KEYS.CaloriesBurned] || 0;
    // Increment the entry if it already exists or create it
    if (numberOfWorkoutsByDiscipline[workout[RAW_KEYS.FitnessDiscipline]]) {
      numberOfWorkoutsByDiscipline[workout[RAW_KEYS.FitnessDiscipline]] += 1;
    } else {
      numberOfWorkoutsByDiscipline[workout[RAW_KEYS.FitnessDiscipline]] = 1;
    }
  }

  const numberOfWorkoutsByDisciplinePieData = Object.entries(
    numberOfWorkoutsByDiscipline
  ).map(([type, count]) => ({ id: type, value: count }));

  return {
    numberOfWorkouts,
    timeInMinutes,
    distanceInMiles: Math.round(distanceInMiles),
    caloriesBurned,
    numberOfWorkoutsByDiscipline,
    numberOfWorkoutsByDisciplinePieData,
  };
}
