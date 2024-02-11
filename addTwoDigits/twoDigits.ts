export const twoDigits = (num: number): number => {
  // let total = 0;

  let nums: string[] = num.toString().split(''); // now should be an array of numbers.
  // nums.forEach(n => {
  //   total+=parseInt(n);
  // });
  // return total;
  // OOOOORRRRR 

  return nums.reduce((a:string, b:string) => {
    return parseInt(a) + parseInt(b);
  }); 

};

//console.log(twoDigits(29)); //expecting 11