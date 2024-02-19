import { alphabetShift } from "./alphabetShift";

describe(alphabetShift.name, () => {
  it('alphShift test 1', () => {
    //function call
    const result = alphabetShift('crazy');
    //assert
    expect(result).toBe('dsbaz');
  });
});