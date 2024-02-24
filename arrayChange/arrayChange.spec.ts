import { arrayChange } from "./arrayChange";

describe(arrayChange.name, ()=> {

  it('test 1: array changes',()=> {
    //function call
    const result = arrayChange([1,1,1]);
    //assert
    expect(result).toBe(3);
  });

  it('test2: array changes', ()=> {
    //function call
    const result = arrayChange([1,-1,0]);
    //assert
    expect(result).toBe(6);
  });

  it('test3: array changes', () => {
    //function call 
    const result = arrayChange([3,1,1,8,6]);
    //assert
    expect(result).toBe(10);
  })
});
