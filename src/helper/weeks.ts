export const getWeekArrayFromArray = (week: number[]): number[] => {
  const startWeek = week[0];
  const endWeek = week[1];
  let result: number[] = [];
  for (let i: number = startWeek; i <= endWeek; i++) {
    result.push(i);
  }

  return result;
};

export const getStartEndWeekFromArray = (week: string[]): number[] => {
  return [Number(week[0]), Number(week[week.length - 1])];
};

// export const getWeekArrayForRangeSlider = (week: string[]) => {
//     return [week[]]
// }
