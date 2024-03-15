export const arrayConversion = (sumArr: number[]):number => {
  let isOdd: boolean = true;

  let currentArray: number[][]| number[] = sumArr.length > 1 ? loopPairs(sumArr) : sumArr;
  while(currentArray.length !== 1) { //if the result has not yet been returned, then we need to break down the array still.
    isOdd = !isOdd
    if (isOdd) {
      console.log('is odd')
      arrayConversion(mutlipleLoop(currentArray));
    } else {
      arrayConversion(AddLoop(currentArray)); 
    }
  } 

  return currentArray[0];
};

const loopPairs = (largeArr: number[][]): number[] | number[][] => {
  let newArray: number[][]|undefined = []
  for (let i = 0; i < largeArr.length-1; i++) {
    newArray.push([largeArr.slice(i, i+2)])
  };
  console.log('pairing : ', newArray)
  return newArray
};

const mutlipleLoop = (multipleArr: number[][]): number[] => {
  let result: number[] = []
  for (let i = 0; i < multipleArr.length - 1; i++) {
    result.push(multipleArr[i][0] * multipleArr[i][1])
  }
  console.log('multiply results: ', result)
  return result;
};

const AddLoop = (addArr: number[][]): number[] => {
  let result: number[] = []
  for (let i = 0; i < addArr.length - 1; i++) {
    result.push(addArr[i][0] + addArr[i][1])
  }
  console.log('add result: ', result)
  return result;
};

console.log(arrayConversion([1,2,3,4,5,6,7,8]))