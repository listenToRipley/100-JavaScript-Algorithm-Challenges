import { arrayChange } from "./arrayChange";

describe(arrayChange.name, ()=> {

  it('test 1: array changes',()=> {
    //function call
    const result = arrayChange([1,1,1]);
    //assert
    expect(result).toBe(3);
  });

});
