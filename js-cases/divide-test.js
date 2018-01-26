const divide = require('../js-operands-calculation/divide');

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(4 , 2)).toBe(2);
  });
});