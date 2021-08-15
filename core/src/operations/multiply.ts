import { numberCorrectionalBigger } from '../utils/numberCorrectional';

export default function multiply(
  firstNumber: number,
  secondNumber: number
): number {
  const correctional = numberCorrectionalBigger(firstNumber, secondNumber);

  const number =
    (correctional * firstNumber * (correctional * secondNumber)) /
    correctional ** 2;

  const endNumber = number;

  return endNumber;
}
