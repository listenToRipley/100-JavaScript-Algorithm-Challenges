export const longestStrings = (list: string[]): string[] => {
  let longest = list[0].length //starting value
  let result = [];

  list.forEach((str)=> {
    if (str.length  == longest) {
      result.push(str);
    } else if (str.length > longest) {
      longest = str.length //now the longest is this
      result = [str]// reset  the results array.
    }//if the current string is shorter than longest, then we should just ignore it.

  });

  return result;
};