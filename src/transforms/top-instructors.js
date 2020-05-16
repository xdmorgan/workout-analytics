import { RAW_KEYS } from "../constants";

export default function transform({ data }) {
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
