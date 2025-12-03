function calculate(operand1, operator, operand2) {
  // 3.1 Input Validation
  if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
    return "Error: Invalid number.";
  }

  // 3.2 Operator Validation
  const validOperators = ['+', '-', '*', '/'];
  if (!validOperators.includes(operator)) {
    return "Error: Invalid operator.";
  }

  // 3.3 Division by Zero Check
  if (operator === '/' && operand2 === 0) {
    return "Error: Division by zero is not allowed.";
  }

  // 3.4 Perform the Operation
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      // This case should ideally not be reached due to operator validation
      return "Error: Unknown error.";
  }
}

module.exports = calculate;
