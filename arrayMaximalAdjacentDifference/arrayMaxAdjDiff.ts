export const arrayMaxAdjDiff = (inputArray: number[]):number => {
  let max: number = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 1; i < inputArray.length-1; i++) {
    if (inputArray[i+1]) { //valid there is a next value
      let abs:number = Math.abs(inputArray[i] - inputArray[i+1])
      max = abs > max ? abs : max;
    };
  };

  return max;
};

console.log(arrayMaxAdjDiff([2, 4, 1, 0]))