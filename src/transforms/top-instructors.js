import { RAW_KEYS } from "../constants";

export function computeFromRawValues(data) {
  const totals = {};
  const byDiscipline = {};

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

export function convertDisciplineDataToBarChart(discipline) {
  return Object.entries(discipline).map(([name, count]) => ({
    id: name,
    value: count,
  }));
}
export function convertAggregateDataToBarCharts(discipline) {
  return Object.entries(discipline).reduce(
    (all, [name, counts]) => ({
      ...all,
      [name]: convertDisciplineDataToBarChart(counts),
    }),
    {}
  );
}

export default function transform({ data }) {
  const computed = computeFromRawValues(data);
  const chartData = convertAggregateDataToBarCharts(computed.byDiscipline);
  return {
    chartData,
  };
}
