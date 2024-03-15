import { arrayConversion } from './arrayConversion';

describe(arrayConversion.name, () => {
  it('test1: array conversion', () => {
    //function call
    const result = arrayConversion([1,2,3,4,5,6,7,8]);
    //assert
    expect(result).toBe(186);
  });
});