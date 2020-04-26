import dateFormat from "date-fns/format";
import min from "date-fns/min";
import max from "date-fns/max";
import { KEY_NAMES } from ".";

const format = (d, pattern = "yyyy-MM-dd") => dateFormat(d, pattern);

export default function transform({ data }) {
  const entries = data.reduce((all, entry) => {
    const day = format(new Date(entry[KEY_NAMES.WorkoutTimestamp]));
    const value = entry[KEY_NAMES.CaloriesBurned];
    if (all[day]) {
      all[day] = {
        ...all[day],
        value: all[day].value + value,
      };
    } else {
      all[day] = {
        day,
        value: value,
      };
    }
    return all;
  }, {});

  const dates = Object.keys(entries);

  return {
    min: format(min(dates.map((d) => new Date(d)))),
    max: format(max(dates.map((d) => new Date(d)))),
    entries: Object.values(entries),
  };
}
