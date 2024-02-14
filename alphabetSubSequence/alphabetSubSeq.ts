export const alphabetSubSeq = (seq: string): boolean => {
  let inOrder = true;
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let seqArray = seq.split('');
  let latestIdx = alphabet.indexOf(seqArray[0]);//have to bet this

  for (let i = 1; i < seqArray.length - 1; i++) { //start at the second item since we have already set the next value.
    let letterIdx = alphabet.indexOf(seqArray[i])
    if (latestIdx < letterIdx) {
      return inOrder = false;
    }

  }

  return inOrder;
};