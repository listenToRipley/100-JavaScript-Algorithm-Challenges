export const alternatingSums = (group: number[]): number[] => {
  let odds: number = 0;
  let evens: number = 0;

  group.forEach((num: number) => {
    (num % 2) == 0 ? evens+=num : odds+=num;
  });

  return [evens, odds]
};