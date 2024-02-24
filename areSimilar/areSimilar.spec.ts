import { areSimilar } from "./areSimilar";

describe(areSimilar.name, () => {

  it('test1: are Similar', ()=> {
    //function call
    const result = areSimilar([1,2,3], [1,2,3])
    //assert
    expect(result).toBe(true);
  });

  it('test2: are Similar', ()=> {
    //function call
    const result = areSimilar([1,2,3], [2,1,3])
    //assert
    expect(result).toBe(true);
  });


  it('test3: are Similar', ()=> {
    //function call
    const result = areSimilar([1,2,2], [2,1,1])
    //assert
    expect(result).toBe(false);
  });

  it('test4: are Similar', ()=> {
    //function call
    const result = areSimilar([5,1,2,3], [1,2,3])
    //assert
    expect(result).toBe(false);
  });

  it('test5: are Similar', ()=> {
    //function call
    const result = areSimilar([5,1,2,3,4], [5,1,2,4,3])
    //assert
    expect(result).toBe(true);
  });

  it('test6: are Similar', ()=> {
    //function call
    const result = areSimilar([5,1,2,3,4], [1,2,3,4,5])
    //assert
    expect(result).toBe(false);
  });
});