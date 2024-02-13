import { longestStrings } from "./longestStrings";

describe(longestStrings.name, () => {
  it('find all the longest strings, test 1', () => {
    //function call
    const result = longestStrings(["aba", "aa", "ad", "vcd", "aba"]);
    //assert
    expect(result).toStrictEqual(["aba", "vcd", "aba"]);
  });

  it('find longest, test 2', () => {
    //function call
    const result = longestStrings(["aba", "vcd", "aba", "abcedf"]);
    //assert
    expect(result).toStrictEqual(["abcedf"]);
  })
})