type PageRange = { startIndex: number; endIndex: number };

function getDisplayedRange(
  pageNumber: number,
  pageSize: number,
  totalItems: number,
): PageRange {
  const startIndex = (pageNumber - 1) * pageSize + 1;
  const endIndex = Math.min(pageNumber * pageSize, totalItems);
  return { startIndex, endIndex };
}
export default getDisplayedRange;
