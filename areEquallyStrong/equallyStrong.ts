export const equallyStrong = (yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number):boolean => {
  let equal:boolean = false;
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  if (yourWeakest === friendsWeakest && yourStrongest === friendsStrongest) {
    return equal = true;
  }

  return equal;
};

console.log(equallyStrong(10,15,15,10)); //true
console.log(equallyStrong(10,15,10,15)); //true
console.log(equallyStrong(15,10,15,9));//false