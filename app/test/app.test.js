const { sum, subtract, multiply, divide } = require('../server');

describe('Mathematical operations', () => {
  test('Sum operation', () => {
    expect(sum(4, 1)).toBe(5);
  });

  test('Subtraction operation', () => {
    expect(subtract(4, 1)).toBe(3);
  });

  test('Multiplication operation', () => {
    expect(multiply(4, 1)).toBe(4);
  });

  test('Division operation', () => {
    expect(divide(4, 2)).toBe(2);
  });

  test('Division by zero', () => {
    expect(divide(4, 0)).toEqual({ error: 'Cannot divide by zero' });
  });
});
