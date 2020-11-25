import * as RAW_KEYS from '../data/keys';

const INCREMENTS = {
  '5': true,
  '10': true,
  '15': true,
  '20': true,
  '30': true,
  '45': true,
  '60': true,
  '75': true,
  '90': true,
};

function computeFromRawValues(data) {
  const byRideLength = {};

  for (const workout of data) {
    const length = workout[RAW_KEYS.LengthInMinutes];
    if (!length) continue;
    const discipline = workout[RAW_KEYS.FitnessDiscipline];
    if (discipline !== 'Cycling') continue;
    if (!INCREMENTS[length]) continue;
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

function chartDataByRideLength(byRideLength) {
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

export default function transform({ data }) {
  const computed = computeFromRawValues(data);
  return {
    byRideLength: chartDataByRideLength(computed.byRideLength),
  };
}

export const key = 'cycling-outputs';
