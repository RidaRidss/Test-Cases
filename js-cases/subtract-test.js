const subtract = require('../js-operands-calculation/subtract');

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(2 , 1)).toBe(1);
  });
});