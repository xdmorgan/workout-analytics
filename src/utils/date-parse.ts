import parse from 'date-fns/parse';

export const parseCSVDate = (
  input: string,
  format: string = 'yyyy-MM-dd kk:mm',
  reference: Date = new Date()
) => {
  // plan
  // parseDate() the date to JS Date in whatever format this is
  // from js Date, convert to utc string
  const [date] = input.split(/[(,)]/);
  return parse(date, format, reference);
};
