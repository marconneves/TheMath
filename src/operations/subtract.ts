import { numberCorrectionalBigger } from '../utils/numberCorrectional';
import round from '../utils/round';

export default function subtract(
  firstNumber: number,
  secondNumber: number
): number {
  const correctional = numberCorrectionalBigger(firstNumber, secondNumber);

  const number =
    (round({ number: correctional * firstNumber }) -
      round({ number: correctional * secondNumber })) /
    correctional;

  return number;
}
