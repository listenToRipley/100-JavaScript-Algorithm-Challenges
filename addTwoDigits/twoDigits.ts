export const twoDigits = (num: number): number => {
  let total = 0;

  let numArray: string[] = num.toString().split(''); // now should be an array of numbers.
  numArray.forEach(n => {
    total+=parseInt(n);
  });

  return total;
};

//console.log(twoDigits(29)); //expecting 11