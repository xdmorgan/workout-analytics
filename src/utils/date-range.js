import subDays from "date-fns/subDays";
import { format } from "./date-format";

export const RANGE_TYPES = {
  thirtyDays: 30,
  sixtyDays: 60,
  ninetyDays: 90,
  oneYear: 365,
  allTime: -1,
};

export function getRangeEnd({ start, type }) {
  const end = "after start i imagine";
  return {
    start,
    end,
    type,
  };
}

export function isInRange({ start, end }, test) {
  return start <= test && test <= end;
}

export function subtractDays(from, count) {
  return format(subDays(new Date(from), count));
}

export function getMinimumDate(dates) {
  return dates.reduce((min, cur) => (cur < min ? cur : min));
}
