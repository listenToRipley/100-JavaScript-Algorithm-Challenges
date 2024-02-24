export const areSimilar = (group1: number[], group2: number[]):boolean => {
  const newGroup1: number[] | string = [];
  let newGroup2: number[] | string = [];

  if (group1.toString() === group2.toString()) {
    return true;
  };

  group1.forEach((value: number, idx:number) => {
    if(group1[idx] !== group2[idx]) {//if we have to change anything
      newGroup1.push(group1[idx]);
      newGroup2.push(group2[idx]);
    };
  });

  newGroup2 = newGroup2.reverse();//since we would have added the value from group2 after group1. In order to match, group2 should be reversed.

  if (newGroup1.length === 2 && (newGroup1.toString() === newGroup2.toString())) {//first value, means that there should only be two items shifted. Second, is the values that were moved are the same values.
    return true;
  }

  return false;
};

// console.log(areSimilar([1,2,3], [1,2,3]))//true
// console.log(areSimilar([1,2,3], [2,1,3]))//true
// console.log(areSimilar([1,2,2], [2,1,1]))//false