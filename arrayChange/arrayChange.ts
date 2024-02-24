export const arrayChange = (array: number[]): number => {
  let shifts: number = 0
  let copyArray: number[] = [...array]; //so we don't mutate

  for (let i = 0; i < copyArray.length; i++) {
    const value = copyArray[i];
    const nextValue = copyArray[i+1];
    if (value >= nextValue) {
      const difference = Math.abs(value + 1  - nextValue);
      copyArray[i + 1] = nextValue + difference;
      shifts+= difference;
    }
  };

  return shifts ;
};

//console.log(arrayChange([1,1,1]))