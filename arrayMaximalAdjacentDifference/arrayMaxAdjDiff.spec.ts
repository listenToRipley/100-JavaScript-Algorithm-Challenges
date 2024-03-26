import { arrayMaxAdjDiff } from "./arrayMaxAdjDiff";

describe(arrayMaxAdjDiff.name, () => {

  it('test1: max adj diff', ()=> {
    //function call
    const result = arrayMaxAdjDiff([2,4,1,0]);
    //assert
    expect(result).toBe(3);
  });

  it('test2: max adj diff', ()=> {
    //function call
    const result = arrayMaxAdjDiff([2, 9, 1, 0])
    //assert
    expect(result).toBe(8)
  });
});