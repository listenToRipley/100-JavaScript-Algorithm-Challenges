export const arrayMaxSum = (array: number[], num: number): number => {
  let total = 0;

  for (let i = 0; i < array.length-1; i++) {
    let newTotal: number = total;
    if (array[i+num]) {
      let adding: number[] | number = array.slice(i, i+num);
      let result: number = 0;
      adding = adding.reduce((prevNum:number, currNum: number) => prevNum + currNum, result)
      if (adding > total) {
        total = adding
      };
    };
  };
  return total;
};

console.log(arrayMaxSum([2, 3, 5, 1, 6], 2));