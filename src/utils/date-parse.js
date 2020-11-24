import parse from "date-fns/parse";

export const parseCSVDate = (
  input,
  format = "yyyy-MM-dd kk:mm",
  reference = new Date()
) => {
  // plan
  // parseDate() the date to JS Date in whatever format this is
  // from js Date, convert to utc string
  const [date] = input.split(/[(,)]/);
  return parse(date, format, reference);
};
