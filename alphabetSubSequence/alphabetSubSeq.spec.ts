import { alphabetSubSeq } from "./alphabetSubSeq";

describe(alphabetSubSeq.name, () => {
  it('test 1 for alphabet seq', () => {
    //function call
    const result = alphabetSubSeq('effg');
    //asset
    expect(result).toBe(false);
  });

  it('test 2 for alphabet seq', () => {
    //function call
    const result = alphabetSubSeq('cdce');
    //asset
    expect(result).toBe(false);
  });

  it('test 3 for alphabet seq', () => {
    //function call
    const result = alphabetSubSeq('ace');
    //asset
    expect(result).toBe(true);
  });

  it('test 2 for alphabet seq', () => {
    //function call
    const result = alphabetSubSeq('bxz');
    //asset
    expect(result).toBe(true);
  });
});