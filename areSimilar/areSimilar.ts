export const areSimilar = (group1: number[], group2: number[]):boolean => {
  let similar: boolean = false;
  //short circuit if one is longer than the other.
  if (group1.length !== group2.length) {
    return similar;
  }
  //track how many times we have to move a number.
  let swapCount: number = 0;
  let newGroup2: number[] = []
  
  group1.forEach((value: number, idx: number ) => {
    if (value != group2[idx]) {
      let findValue: number = group2.indexOf(value);
      if (findValue == -1) {
        return similar = false;
      } else {
        newGroup2.push(value);
        swapCount ++;
      }
    } else {
      newGroup2.push(group2[idx])
    }
  });
  if (group1.toString() === newGroup2.toString() && swapCount <= 1) {
    return similar = true;
  } 

  return similar;
};

// console.log(areSimilar([1,2,3], [1,2,3]))//true
// console.log(areSimilar([1,2,3], [2,1,3]))//true
// console.log(areSimilar([1,2,2], [2,1,1]))//false