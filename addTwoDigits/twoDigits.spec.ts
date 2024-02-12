import { twoDigits } from "./twoDigits";

describe(twoDigits.name, () => {
  it('adding all values from a number to get total', () => {
    //create function call
    const result = twoDigits(29);
    //assert 
    expect(result).toBe(11);
  });

describe(twoDigits.name, () => {
  it('long number result', ()=> {
    //create function call
    const result = twoDigits(123456);
    //assert
    expect(result).toBe(21);

  });
})

});