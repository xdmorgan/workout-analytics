import subDays from "date-fns/subDays";
import { format } from "./date-format";

export const RANGE_TYPES = {
  thirtyDays: 30,
  sixtyDays: 60,
  ninetyDays: 90,
  oneYear: 365,
  allTime: 0,
};

export function isInRange({ start, end }, test) {
  return start <= test && test <= end;
}

export function subtractDays(from, count) {
  return format(subDays(new Date(from), count));
}

export function getMinimumDate(dates) {
  return dates.reduce((min, cur) => (cur < min ? cur : min));
}

export function filterByRange({ dates, from, length, clampRange = false }) {
  // from an array of 'dates' (probs via object.keys), an 'end' date, and a 'range'
  // e.g. dates = ["2020-01-31", "2020-01-30", "2020-02-28", "2020-03-31"]
  // & end = "2020-09-10" & range = RANGE_TYPES.ninetyDays
  const historyStart = getMinimumDate(dates);
  // getMinimumDate() in dates (historyStart: "2020-01-30")
  // if range is 'all', use the earliest date in `dates` (rangeStart: historyStart)
  // else 'rangeStart' = subtractDays('end', 'range')
  let rangeStart =
    length === RANGE_TYPES.allTime ? historyStart : subtractDays(from, length);
  // next, getMinimumDate(['historyStart', 'rangeStart']) then keep the one that
  //_isn't_ the minimum (the max) as 'start'
  const clampedRange = getMinimumDate([historyStart, rangeStart]);
  if (clampRange && clampedRange === rangeStart) {
    // if the start of the range is outside the history, use history instead
    rangeStart = historyStart;
  }
  // now, with the 'start' and 'end' of the range calculated, `filter()` the `dates` by `isInRange`
  const filtered = dates.filter((d) =>
    isInRange({ start: rangeStart, end: from }, d)
  );

  return {
    start: rangeStart,
    end: from,
    filtered,
  };
}
