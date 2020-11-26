import { CYCLING_DISCIPLINE } from '../constants';
import * as RAW_KEYS from '../data/keys';
import { RawData } from '../data/types';

const {
  AverageResistance,
  AverageCadenceRPM,
  AverageWatts,
  WorkoutTimestamp,
  FitnessDiscipline,
} = RAW_KEYS;

type AverageCyclingMetrics = {
  [date: string]: {
    [AverageCadenceRPM]: number;
    [AverageResistance]: string;
    [AverageWatts]: number;
  };
};

function computeFromRawValues(data: RawData) {
  const workouts: AverageCyclingMetrics = {};
  for (const workout of data) {
    const discipline = workout[FitnessDiscipline];
    if (discipline !== CYCLING_DISCIPLINE) continue;

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
function chartDataByMetric(workouts: AverageCyclingMetrics) {
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

export default function transform({ data }: { data: RawData }) {
  const { workouts } = computeFromRawValues(data);
  return chartDataByMetric(workouts);
}
