import { largestProd } from "./largestProd";

describe(largestProd.name, () => {
  it('Largest Product Test1', () => {
    //function call
    const result = largestProd([3,6,-2,-5,7,3]);
    //assert
    expect(result).toStrictEqual([7,3])

  });
});