import { numberCorrectionalBigger } from '../utils/numberCorrectional';

export default function division(
  firstNumber: number,
  secondNumber: number
): number {
  const correctional = numberCorrectionalBigger(firstNumber, secondNumber);

  const number =
    (correctional * firstNumber) /
    (correctional * secondNumber) /
    (correctional / correctional);

  const endNumber = number;

  return endNumber;
}
