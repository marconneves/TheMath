import { numberCorrectionalBigger } from '../utils/numberCorrectional';
import round from '../utils/round';

export default function add(firstNumber: number, secondNumber: number): number {
  const correctional = numberCorrectionalBigger(firstNumber, secondNumber);

  const number =
    (round({ number: correctional * firstNumber }) +
      round({ number: correctional * secondNumber })) /
    correctional;

  const endNumber = number;

  return endNumber;
}
