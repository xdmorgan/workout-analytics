export const parseCSVDate = (input) => {
  const [date] = input.split(/[(,)]/);
  // const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // console.log(new Date(date).toLocaleString({ timeZone }));
  // Just parse time as 8:00pm in whatever your current TZ is
  // that way, it will be right for people in the same tz and who cares if its
  // not locoalized when on vacation / moved etc. hopefully they yfix the
  // date type to not be lossy at some point
  return new Date(date);
};
