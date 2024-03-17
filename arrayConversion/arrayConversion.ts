export const arrayConversion = (sumArr: number[]):number => {
  let isOdd: boolean = true;

  while (sumArr.length !== 1) {
    sumArr = sumProduct(sumArr, isOdd);
    isOdd = !isOdd;
  };
  return sumArr[0]
};

const sumProduct = (nums: number[], isOdd: boolean): number[] => {
  const sumProducts: number[] = [];

  for (let i = 0; i < nums.length; i+=2) { //increase by 2
    if (isOdd) {
      sumProducts.push(nums[i] + nums[i+1]);
    } else {
      sumProducts.push(nums[i] * nums[i+1]);
    }
  }
  return sumProducts;
};
console.log(arrayConversion([1,2,3,4,5,6,7,8]))