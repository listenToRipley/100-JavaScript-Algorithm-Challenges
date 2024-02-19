export const alphabetSubSeq = (seq: string): boolean => {
  let inOrder = true;
  let seqArray = seq.split('');
  // const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // let latestIdx = alphabet.indexOf(seqArray[0]);//have to bet this

  // for (let i = 1; i < seqArray.length - 1; i++) { //start at the second item since we have already set the next value.
  //   let letterIdx = alphabet.indexOf(seqArray[i]);
  //   if (latestIdx < letterIdx) {
  //     latestIdx = letterIdx;
  //   } else {
  //     return inOrder = false;
  //   };

  // };

  //or we can do this
  const charValues: number[] = [];

  seqArray.forEach((char:string) => {
    charValues.push(char.charCodeAt(0)); //get the unit code values of each letter.
  });

  console.log(charValues);
  if(new Set(charValues).size !== charValues.length) {
    return inOrder = false;
  };
  for (let i = 0; i < charValues.length -1; i++) {
    if(charValues[i]>= charValues[i+1]) {
      return inOrder = false;
    };
  };

  return inOrder;
};