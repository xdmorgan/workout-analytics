import { RAW_KEYS } from "../constants";
import { format } from "../utils/date-format";
import { parseCSVDate } from "../utils/date-parse";

export default function transform({ data }) {
  const entries = data.reduce((all, entry) => {
    const day = format(parseCSVDate(entry[RAW_KEYS.WorkoutTimestamp]));
    const value = entry[RAW_KEYS.CaloriesBurned];
    const year = day.slice(0, 4);
    if (!all[year]) all[year] = {};
    if (all[year][day]) {
      all[year][day] = {
        ...all[year][day],
        value: all[year][day].value + value,
      };
    } else {
      all[year][day] = {
        day,
        value: value,
      };
    }
    return all;
  }, {});

  const years = Object.keys(entries).reduce(
    (all, year) => ({
      ...all,
      [year]: {
        // padded to avoid any timezone spillover
        start: `${year}-01-02`,
        end: `${year}-12-30`,
      },
    }),
    {}
  );

  return {
    years,
    entries,
  };
}
