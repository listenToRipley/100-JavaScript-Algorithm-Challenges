import { equallyStrong } from "./equallyStrong";

describe(equallyStrong.name, () => {
  it('test 1: equally strong',() => {
    //function call
    const result = equallyStrong(10,15,15,10);
    //assert
    expect(result).toBe(true);
  });

  it('test 2: equally strong',() => {
    //function call
    const result = equallyStrong(10,15,10, 15);
    //assert
    expect(result).toBe(true);
  });

  it('test 3: equally strong',() => {
    //function call
    const result = equallyStrong(15,10,15,9);
    //assert
    expect(result).toBe(false);
  });

});