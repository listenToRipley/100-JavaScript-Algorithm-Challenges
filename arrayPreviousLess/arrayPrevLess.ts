export const arrayPrevLess = (inputArray: number[]): number[] => {
  for (let i = inputArray.length; i > 0; i--) {
    inputArray[i] = inputArray[i] <= inputArray[i+1] ?inputArray[i+1] : -1
  };
  return inputArray;
};

console.log(arrayPrevLess([3, 5, 2, 4, 5]));