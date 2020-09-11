import dateFormat from "date-fns/format";

export const format = (d, pattern = "yyyy-MM-dd") => dateFormat(d, pattern);
