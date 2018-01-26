const multiply = require('../js-operands-calculation/multiply');

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(4 , 2)).toBe(8);
  });
});