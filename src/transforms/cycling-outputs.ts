import * as RAW_KEYS from '../data/keys';
import { RawData } from '../data/types';

type OutputsByRideLength = { [length: string]: { [date: string]: number } };

const CYCLING_DISCIPLINE = 'Cycling';
const INCREMENTS = [5, 10, 15, 20, 30, 45, 60, 75, 90];

function computeFromRawValues(data: RawData) {
  const byRideLength: OutputsByRideLength = {};

  for (const workout of data) {
    const length = workout[RAW_KEYS.LengthInMinutes];
    if (!length) continue;
    const discipline = workout[RAW_KEYS.FitnessDiscipline];
    if (discipline !== CYCLING_DISCIPLINE) continue;
    if (!INCREMENTS.includes(length)) continue;
    if (!byRideLength[length]) {
      byRideLength[length] = {};
    }
    byRideLength[length][workout[RAW_KEYS.WorkoutTimestamp]] =
      workout[RAW_KEYS.TotalOutput];
  }
  return {
    byRideLength,
  };
}

function chartDataByRideLength(byRideLength: OutputsByRideLength) {
  return Object.entries(byRideLength).reduce(
    (all, [name, values]) => ({
      ...all,
      [name]: {
        id: name,
        data: Object.entries(values).map(([timestamp, output]) => ({
          x: timestamp.split(' ')[0],
          y: output,
        })),
      },
    }),
    {}
  );
}

export default function transform({ data }: { data: RawData }) {
  const computed = computeFromRawValues(data);
  return {
    byRideLength: chartDataByRideLength(computed.byRideLength),
  };
}
