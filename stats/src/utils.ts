export const dateStringToDate = (dateString: string): Date => {
  const dateParse = dateString
    .split("/")
    .map((value: string): number => parseInt(value));
  //[28, 10, 2018]

  return new Date(dateParse[2], dateParse[1] - 1, dateParse[0]);
};
