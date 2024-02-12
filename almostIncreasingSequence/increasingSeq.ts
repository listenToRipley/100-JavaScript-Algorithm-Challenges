export const increasingSeq = (seq: number[]):boolean => {
  let increasing: boolean = true;
  let removed: number = 0;// holder for how many numbers have to be removed
  let unsortedSeq = [...seq] // so we are always retaining the original 

  //option 1
  let sortedSeq: number[] = [...seq].sort((a:number,b:number) => a-b); 

  for (let i = 0; i < unsortedSeq.length - 1; i++) {
    if (unsortedSeq[i] != sortedSeq[i] && removed == 0) {
      delete unsortedSeq[i] 
      delete sortedSeq[i]
      removed += 1;
    } else {
      return increasing = false;
    }
    
  }

  return increasing;
}