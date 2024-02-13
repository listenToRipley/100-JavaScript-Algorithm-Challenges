export const longestStrings = (list: string[]): string[] => {
  let longest = list[0].length //starting value
  let result = [];

  list.forEach((word:string)=> {
    if (word.length  == longest) {
      result.push(word);
    } else if (word.length > longest) {
      longest = word.length //now the longest is this
      result = [word]// reset  the results array.
    }//if the current string is shorter than longest, then we should just ignore it.

  });

  return result;
};