export const largestProd = (products:number[]): number[] => {
  let largestSet: number[] = [products[0], products[1]];//starting values will the first two elements
  let multiple: number = products[0] * products[1];//starting comparing values will be the first two elements multiplied.

  products.forEach((num: number, idx: number) => {
    if (num * products[idx +1] > multiple) {
      largestSet = [num, products[idx +1]];
      multiple = num * products[idx +1];
    }
  });

  return largestSet;
}

console.log(largestProd([3,6,-2,-5,7,3])) // 21