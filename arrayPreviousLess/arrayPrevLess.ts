export const arrayPrevLess = (inputArray: number[]): number[] => {
  let copyInputArray: number[] = [...inputArray];
  for (let i = copyInputArray.length-1; i >=0; i--) {
    copyInputArray[i] = copyInputArray[i] >= copyInputArray[i-1] ? copyInputArray[i-1] : -1
  }
  return copyInputArray;
};

console.log(arrayPrevLess([3, 5, 2, 4, 5]));