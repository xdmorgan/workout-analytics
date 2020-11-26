import * as RAW_KEYS from '../data/keys';
import { RawData } from '../data/types';
import { toDecimalPlaces } from '../utils/decimal-rounding';

type CountByDiscipline = { [discipline: string]: number };
type MinutesByDiscipline = CountByDiscipline;
type MilesByDiscipline = CountByDiscipline;
type CaloriesByDiscipline = CountByDiscipline;

function numberOfWorkouts({ data }: { data: RawData }) {
  const byDiscipline: CountByDiscipline = {};
  for (const workout of data) {
    // Increment the entry if it already exists or create it
    if (byDiscipline[workout[RAW_KEYS.FitnessDiscipline]]) {
      byDiscipline[workout[RAW_KEYS.FitnessDiscipline]] += 1;
    } else {
      byDiscipline[workout[RAW_KEYS.FitnessDiscipline]] = 1;
    }
  }

  return {
    sum: data.length,
    byDiscipline,
    pieChart: Object.entries(byDiscipline).map(([type, count]) => ({
      id: type,
      label: type,
      value: count,
    })),
  };
}

function timeInMinutes({ data }: { data: RawData }) {
  let sum = 0;
  const byDiscipline: MinutesByDiscipline = {};
  for (const workout of data) {
    const inc = workout[RAW_KEYS.LengthInMinutes] || 0;
    sum += inc;
    // Increment the entry if it already exists or create it
    if (byDiscipline[workout[RAW_KEYS.FitnessDiscipline]]) {
      byDiscipline[workout[RAW_KEYS.FitnessDiscipline]] += inc;
    } else {
      byDiscipline[workout[RAW_KEYS.FitnessDiscipline]] = inc;
    }
  }

  return {
    sum,
    byDiscipline,
    pieChart: Object.entries(byDiscipline).map(([type, count]) => ({
      id: type,
      label: type,
      value: count,
    })),
  };
}

function distanceInMiles({ data }: { data: RawData }) {
  let sum = 0;
  let byDiscipline: MilesByDiscipline = {};
  for (const workout of data) {
    const inc = workout[RAW_KEYS.DistanceInMiles] || 0;
    sum += inc;
    // Increment the entry if it already exists or create it
    if (byDiscipline[workout[RAW_KEYS.FitnessDiscipline]]) {
      byDiscipline[workout[RAW_KEYS.FitnessDiscipline]] += inc;
    } else {
      byDiscipline[workout[RAW_KEYS.FitnessDiscipline]] = inc;
    }
  }

  byDiscipline = Object.entries(byDiscipline).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [key]: toDecimalPlaces(val, 2),
    }),
    {}
  );

  return {
    sum: toDecimalPlaces(sum, 2),
    byDiscipline,
    pieChart: Object.entries(byDiscipline)
      .map(([type, count]) => ({
        id: type,
        label: type,
        value: count,
      }))
      .filter(entry => entry.value > 0),
  };
}

function caloriesBurned({ data }: { data: RawData }) {
  let sum = 0;
  const byDiscipline: CaloriesByDiscipline = {};
  for (const workout of data) {
    const inc = workout[RAW_KEYS.CaloriesBurned] || 0;
    sum += inc;
    // Increment the entry if it already exists or create it
    if (byDiscipline[workout[RAW_KEYS.FitnessDiscipline]]) {
      byDiscipline[workout[RAW_KEYS.FitnessDiscipline]] += inc;
    } else {
      byDiscipline[workout[RAW_KEYS.FitnessDiscipline]] = inc;
    }
  }

  return {
    sum,
    byDiscipline,
    pieChart: Object.entries(byDiscipline).map(([type, count]) => ({
      id: type,
      label: type,
      value: count,
    })),
  };
}

export default function transform({ data }: { data: RawData }) {
  return {
    numberOfWorkouts: numberOfWorkouts({ data }),
    timeInMinutes: timeInMinutes({ data }),
    distanceInMiles: distanceInMiles({ data }),
    caloriesBurned: caloriesBurned({ data }),
  };
}
