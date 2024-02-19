export const alphabetShift = (word:string): string => {
  let wordArray: string[] = word.split('');
  //const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');//alphabet array
  // let newWordArray: string[] = []; //provide new array without changing the word array, but we could just change the value of tine index item to the new value.
  
  // wordArray.forEach((letter: string) => {
  //   let index = alphabet.indexOf(letter.toLowerCase())
  //   index === alphabet.length - 1 ? newWordArray.push(alphabet[0]) : newWordArray.push(alphabet[index + 1]);
  // })

  // return newWordArray.join('');
  //option 2 is you use objects for your alphabet and the return the value from the key pair into a new string.
  const alphabet: object = {
    'a': 'b', 'b':'c' , 'c':'d', 'd': 'e', 'e':'f', 
    'f': 'g', 'g':'h' , 'h':'i', 'i': 'j', 'j':'k', 
    'k': 'l', 'l':'m' , 'm':'n', 'n': 'o', 'o':'p', 
    'p': 'q', 'q':'r' , 'r':'s', 's': 't', 't':'u', 
    'u': 'v', 'v':'w' , 'w':'x', 'x': 'y', 'y':'z',
    'z': 'a'  
  }

  wordArray.forEach((letter:string, idx: number) => {
    wordArray[idx] = alphabet[letter];
  })

  return wordArray.join('');
}