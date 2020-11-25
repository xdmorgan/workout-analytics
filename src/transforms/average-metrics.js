import * as RAW_KEYS from '../data/keys';

const {
  AverageResistance,
  AverageCadenceRPM,
  AverageWatts,
  WorkoutTimestamp,
  FitnessDiscipline,
} = RAW_KEYS;

function computeFromRawValues(data) {
  const workouts = {};
  for (const workout of data) {
    const discipline = workout[FitnessDiscipline];
    if (discipline !== 'Cycling') continue;

    workouts[workout[WorkoutTimestamp]] = {
      [AverageCadenceRPM]: workout[AverageCadenceRPM],
      [AverageResistance]: workout[AverageResistance],
      [AverageWatts]: workout[AverageWatts],
    };
  }
  return {
    workouts,
  };
}
function chartDataByMetric(workouts) {
  return [
    {
      id: AverageCadenceRPM,
      data: Object.entries(workouts).map(([timestamp, val]) => ({
        x: timestamp.split(' ')[0],
        y: val[AverageCadenceRPM],
      })),
    },
    {
      id: AverageResistance,
      data: Object.entries(workouts).map(([timestamp, val]) => ({
        x: timestamp.split(' ')[0],
        y: val[AverageResistance],
      })),
    },
    {
      id: AverageWatts,
      data: Object.entries(workouts).map(([timestamp, val]) => ({
        x: timestamp.split(' ')[0],
        y: val[AverageWatts],
      })),
    },
  ];
}

export default function transform({ data }) {
  const { workouts } = computeFromRawValues(data);
  return chartDataByMetric(workouts);
}

export const key = 'average-metrics';
