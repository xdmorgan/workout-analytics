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
