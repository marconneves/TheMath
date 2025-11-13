import divide from './divide';
import multiply from './multiply';

export default function powerOf(
  firstNumber: number,
  secondNumber: number
): number {
  if (secondNumber % 1 !== 0) {
    throw new Error('Non-integer exponents are not supported.');
  }

  if (secondNumber === 0) {
    return 1;
  }

  let result = 1;
  const isNegative = secondNumber < 0;
  const exponent = Math.abs(secondNumber);

  for (let i = 0; i < exponent; i++) {
    result = multiply(result, firstNumber);
  }

  if (isNegative) {
    return divide(1, result);
  }

  return result;
}
