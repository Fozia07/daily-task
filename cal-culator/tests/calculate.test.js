const calculate = require('../src/calculate');

describe('calculate', () => {
  // Test Case: Valid addition operation
  test('should correctly add two numbers', () => {
    expect(calculate(5, '+', 3)).toBe(8);
  });

  // Test Case: Valid subtraction operation
  test('should correctly subtract two numbers', () => {
    expect(calculate(10, '-', 4)).toBe(6);
  });

  // Test Case: Valid multiplication operation
  test('should correctly multiply two numbers', () => {
    expect(calculate(7, '*', 2)).toBe(14);
  });

  // Test Case: Valid division operation
  test('should correctly divide two numbers', () => {
    expect(calculate(20, '/', 5)).toBe(4);
  });

  // Test Case: Division by zero error
  test('should return an error for division by zero', () => {
    expect(calculate(10, '/', 0)).toBe("Error: Division by zero is not allowed.");
  });

  // Test Case: Invalid operator error
  test('should return an error for an invalid operator', () => {
    expect(calculate(5, '%', 3)).toBe("Error: Invalid operator.");
  });

  // Test Case: Invalid first operand type
  test('should return an error for an invalid first number input', () => {
    expect(calculate('abc', '+', 3)).toBe("Error: Invalid number.");
  });

  // Test Case: Invalid second operand type
  test('should return an error for an invalid second number input', () => {
    expect(calculate(5, '+', 'xyz')).toBe("Error: Invalid number.");
  });

  // Edge Case: Decimal inputs
  test('should handle decimal numbers correctly', () => {
    expect(calculate(2.5, '+', 1.5)).toBe(4.0);
    expect(calculate(5.5, '*', 2)).toBe(11.0);
  });

  // Edge Case: Negative inputs
  test('should handle negative numbers correctly', () => {
    expect(calculate(-5, '+', 3)).toBe(-2);
    expect(calculate(10, '-', -4)).toBe(14);
    expect(calculate(-2, '*', -3)).toBe(6);
  });

  // Edge Case: Large numbers (relying on JavaScript's Number type)
  test('should handle large numbers correctly', () => {
    const largeNum1 = 999999999999999;
    const largeNum2 = 1;
    expect(calculate(largeNum1, '+', largeNum2)).toBe(largeNum1 + largeNum2);
  });
});
