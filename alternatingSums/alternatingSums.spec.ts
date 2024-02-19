import { alternatingSums } from "./alternatingSums";

describe(alternatingSums.name, () => {

  it('test 1: alternating sums result',() => {
    //function call
    const result = alternatingSums([50,60,60,45,70]);
    //assert
    expect(result).toStrictEqual([180,105]);
  })

});