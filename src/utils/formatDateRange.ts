const formatDateRange = (start: Date, end: Date): string => {
  if (!start || !end) return "";
  const [earlierDate, laterDate] = start < end ? [start, end] : [end, start];

  return `${earlierDate.toISOString()} - ${laterDate.toISOString()}`;
};
export default formatDateRange;
