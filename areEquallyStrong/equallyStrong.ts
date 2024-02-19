export const equallyStrong = (yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number):boolean => {
  let yourHands: number[] = [yourLeft, yourRight];
  let friendsHands: number[] = [friendsLeft, friendsRight];

  yourHands.sort((a: number,b: number) => a-b);
  friendsHands.sort((a:number, b:number) => a-b);

  if (yourHands[0] !== friendsHands[0] && yourHands[1] !== friendsHands[1]) {
    return false;
  }

  return true;
};

console.log(equallyStrong(10,15,15,10)); //true
console.log(equallyStrong(10,15,10,15)); //true
console.log(equallyStrong(15,10,15,9));//false