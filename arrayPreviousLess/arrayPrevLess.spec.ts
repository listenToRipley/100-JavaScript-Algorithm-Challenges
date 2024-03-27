import { arrayPrevLess } from "./arrayPrevLess";

describe(arrayPrevLess.name, ()=> {
  it('test1: array previous less', ()=> {
    //function call
    const result = arrayPrevLess([3, 5, 2, 4, 5]);
    //assert
    expect(result).toStrictEqual([-1, 3, -1, 2, 4])
  });

});