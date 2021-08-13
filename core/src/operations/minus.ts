import { numberCorrectionalBigger } from '../utils/numberCorrectional';

export default function minus(
  firstNumber: number,
  secondNumber: number
): number {
  const correctional = numberCorrectionalBigger(firstNumber, secondNumber);

  const number =
    (correctional * firstNumber - correctional * secondNumber) / correctional;

  const endNumber = number;

  return endNumber;
}
