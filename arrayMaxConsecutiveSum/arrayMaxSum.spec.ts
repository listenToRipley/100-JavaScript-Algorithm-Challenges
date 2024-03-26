import { arrayMaxSum } from "./arrayMaxSum";

describe(arrayMaxSum.name, ()=> {
  it('test1: array max sum', () => {
    //function all
    const result = arrayMaxSum([2, 3, 5, 1, 6], 2);
    //assert
    expect(result).toBe(8);
  })

});