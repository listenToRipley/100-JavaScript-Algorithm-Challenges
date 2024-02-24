export const areSimilar = (group1: number[], group2: number[]):boolean => {
  let string1: string = [...group1].sort((a:number,b:number)=> a-b).join('');
  let string2: string = [...group2].sort((a:number,b:number)=> a-b).join('');

  return string1 === string2 ? true : false;
}

console.log(areSimilar([1,2,3], [1,2,3]))//true
console.log(areSimilar([1,2,3], [2,1,3]))//true
console.log(areSimilar([1,2,2], [2,1,1]))//false