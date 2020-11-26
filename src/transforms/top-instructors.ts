import * as RAW_KEYS from '../data/keys';
import { RawData } from '../data/types';

type WorkoutsByInstructorName = { [instructor: string]: number };
type WorkoutsByDiscipline = { [discipline: string]: WorkoutsByInstructorName };

export function computeFromRawValues(data: RawData) {
  const totals: WorkoutsByInstructorName = {};
  const byDiscipline: WorkoutsByDiscipline = {};

  for (const workout of data) {
    const name = workout[RAW_KEYS.InstructorName];
    if (!name) continue;
    totals[name] = (totals[name] || 0) + 1;
    const discipline = workout[RAW_KEYS.FitnessDiscipline];
    if (!byDiscipline[discipline]) {
      byDiscipline[discipline] = {};
    }
    byDiscipline[discipline][name] = (byDiscipline[discipline][name] || 0) + 1;
  }

  return {
    totals,
    byDiscipline,
  };
}

export function convertDisciplineDataToBarChart(
  instructor: WorkoutsByInstructorName
) {
  return Object.entries(instructor).map(([name, count]) => ({
    id: name,
    value: count,
  }));
}
export function convertAggregateDataToBarCharts(
  discipline: WorkoutsByDiscipline
) {
  return Object.entries(discipline).reduce(
    (all, [name, counts]) => ({
      ...all,
      [name]: convertDisciplineDataToBarChart(counts),
    }),
    {}
  );
}

export default function transform({ data }: { data: RawData }) {
  const computed = computeFromRawValues(data);
  const chartData = convertAggregateDataToBarCharts(computed.byDiscipline);
  return {
    chartData,
  };
}
