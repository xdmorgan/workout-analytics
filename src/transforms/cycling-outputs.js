import { RAW_KEYS } from "../constants";

const INCREMENTS = {
  "5": true,
  "10": true,
  "15": true,
  "20": true,
  "30": true,
  "45": true,
  "60": true,
  "75": true,
  "90": true,
};

function computeFromRawValues(data) {
  const byDiscipline = {};

  for (const workout of data) {
    const length = workout[RAW_KEYS.LengthInMinutes];
    if (!length) continue;
    const discipline = workout[RAW_KEYS.FitnessDiscipline];
    if (discipline !== "Cycling") continue;
    if (!byDiscipline[discipline]) {
      byDiscipline[discipline] = {};
    }
    if (!INCREMENTS[length]) continue;
    if (!byDiscipline[discipline][length]) {
      byDiscipline[discipline][length] = {};
    }
    byDiscipline[discipline][length][workout[RAW_KEYS.WorkoutTimestamp]] =
      workout[RAW_KEYS.TotalOutput];
  }
  return {
    byDiscipline,
  };
}

function convertToChartDataStructure(obj) {
  // key value pairs of {'timestamp': output}
  return Object.entries(obj).map(([timestamp, output]) => ({
    x: timestamp.split(" ")[0],
    y: output,
  }));
}

function chartDataByDiscipline(values) {
  const groups = Object.keys(values);
  return groups.map((group) => ({
    id: group,
    data: convertToChartDataStructure(values[group]),
  }));
}

export default function transform({ data }) {
  const computed = computeFromRawValues(data);
  const chartData = Object.entries(computed.byDiscipline).reduce(
    (all, [name, values]) => ({
      ...all,
      [name]: chartDataByDiscipline(values),
    }),
    {}
  );
  return {
    chartData,
  };
}
