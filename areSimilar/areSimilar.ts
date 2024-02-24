export const areSimilar = (group1: number[], group2: number[]):boolean => {
  let similar = false;
  //short circuit if one is longer than the other.
  if (group1.length !== group2.length) {
    return similar;
  }
  //track how many times we have to move a number.
  let swapCount1: number = 0;
  let swapCount2:number = 0;
  
  let string1: string = [...group1].sort((a:number,b:number):any => {
    if (a-b > 0) {
      swapCount1 +=1;
    }
    return a-b
  }).join('');
  let string2: string = [...group2].sort((a:number,b:number):any => {
    if (a-b > 0) {
      swapCount2 += 1;
    }
    return a-b
  }).join('');

  const swapDiff = Math.abs(swapCount1 - swapCount2);//check to see if you have to reorder more on one than the other. If there different is greater than 2, then we had to move too many times.

  if (swapDiff <= 1 && string1 === string2) {
    similar = true;
  }

  return similar;
};

// console.log(areSimilar([1,2,3], [1,2,3]))//true
// console.log(areSimilar([1,2,3], [2,1,3]))//true
// console.log(areSimilar([1,2,2], [2,1,1]))//false