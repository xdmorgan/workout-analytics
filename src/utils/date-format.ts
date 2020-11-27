import dateFormat from 'date-fns/format';

export const format = (d: Date, pattern: string = 'yyyy-MM-dd') =>
  dateFormat(d, pattern);
