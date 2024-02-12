export const longestStrings = (list: string[]): string[] => {
  let longest = list[0].length //string value
  let result = [];

  list.forEach((str)=> {
    console.log(str)
    if (str.length  == longest) {
      result.push(str);
    } else if (str.length > longest) {
      longest = str.length
      result = [str]
    }//if the current string is shorter than longest, then we should just ignore it.

  });

  return result;
};