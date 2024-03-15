export const arrayConversion = (sumArr: number[]):number => {
  let result: number = 0;
  let iterationCount: number = 0;

  let currentArray: number[][]| number[] = loopPairs(sumArr)

  do { //if the result has not yet been returned, then we need to break down the array still.

    if (iterationCount % 2 === 0) {
      iterationCount++;
      arrayConversion(AddLoop(currentArray))
    } 

    if (iterationCount % 2 !== 0) {
      iterationCount++;
      arrayConversion(mutlipleLoop(currentArray));
    }
  } while (currentArray.length !== 1) // break condition

  return currentArray[0];
};

const loopPairs = (largeArr: number[]): number[][] => {
  let newArray: number[][]|undefined = []
  for (let i = 0; i < largeArr.length-1; i++) {
    newArray.push(largeArr.slice(i, i+2))
  };
  return newArray
};

const mutlipleLoop = (multipleArr: number[][]): number[] => {
  let result: number[] = []
  for (let i = 0; i < multipleArr.length - 1; i++) {
    result.push(multipleArr[i][0] * multipleArr[i][1])
  }
  return result;
};

const AddLoop = (addArr: number[][]): number[] => {
  let result: number[] = []
  for (let i = 0; i < addArr.length - 1; i++) {
    result.push(addArr[i][0] + addArr[i][1])
  }
  return result;
};

console.log(arrayConversion([1,2,3,4,5,6,7,8]))