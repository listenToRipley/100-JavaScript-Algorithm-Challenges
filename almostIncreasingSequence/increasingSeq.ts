export const increasingSeq = (seq: number[]):boolean => {
  let increasing: boolean = true;
  let removed: number = 0;// holder for how many numbers have to be removed
  let unsortedSeq = [...seq] // so we are always retaining the original 

  //option 2
  for (let j = 0; j < unsortedSeq.length - 1; j++) {
    if ( unsortedSeq[j + 1] > unsortedSeq[j] && removed == 0) {
      unsortedSeq.splice(j + 1, 1);//instead of delete 
      removed += 1;
      console.log(`unsorted now: ${unsortedSeq} \nremoved? ${removed}`);
    } else {
      return increasing = false;
    };  
  };

  return increasing;
}

//console.log(increasingSeq([1,3,2]))