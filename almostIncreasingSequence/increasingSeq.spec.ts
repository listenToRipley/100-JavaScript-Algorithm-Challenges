import { increasingSeq } from "./increasingSeq";

describe(increasingSeq.name, () => {
  it('always increasing, except 1? Test 1', () => {
    //function call
    const result = increasingSeq([1,3,2,1]);
    //assert
    expect(result).toBe(false);
  });

  it('always increasing, except 1? Test 2', () => {
    //function call
    const result = increasingSeq([4,5,6,7,8]);
    //assert
    expect(result).toBe(false);
  });
  
  it('always increasing, except 1? Test 3', () => {
    //function call
    const result = increasingSeq([1,3,2]);
    //assert
    expect(result).toBe(true);
  });
  

});