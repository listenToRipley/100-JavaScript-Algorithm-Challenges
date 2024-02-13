export const alphabetShift = (word:string): string => {
  let alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');//alphabet array
  let wordArray: string[] = word.split('');
  let newWordArray: string[] = []
  
  wordArray.forEach((letter: string) => {
    let index = alphabet.indexOf(letter)
    index === alphabet.length ? newWordArray.push('a') : newWordArray.push(alphabet[index + 1]);
  })

  return newWordArray.join('');
}