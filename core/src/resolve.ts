/* eslint-disable no-param-reassign */
import multiplication from './operations/multiplication';
import division from './operations/division';
import plus from './operations/plus';
import minus from './operations/minus';

function divisionOrMultiplication(fragments: string[]) {
  const multiplyIndex = fragments.indexOf('x');
  const multiplyAsteriskIndex = fragments.indexOf('*');
  const divisionIndex = fragments.indexOf('/');

  if (
    multiplyIndex === -1 &&
    multiplyAsteriskIndex === -1 &&
    divisionIndex === -1
  ) {
    return;
  }

  if (
    multiplyIndex !== -1 &&
    (multiplyIndex > divisionIndex || multiplyIndex > multiplyAsteriskIndex)
  ) {
    const internalResult = multiplication(
      Number(fragments[multiplyIndex - 1]),
      Number(fragments[multiplyIndex + 1])
    );

    fragments[multiplyIndex - 1] = String(internalResult);
    fragments.splice(multiplyIndex, 2);
  }

  if (
    multiplyAsteriskIndex !== -1 &&
    (multiplyAsteriskIndex > divisionIndex ||
      multiplyAsteriskIndex > multiplyIndex)
  ) {
    const internalResult = multiplication(
      Number(fragments[multiplyAsteriskIndex - 1]),
      Number(fragments[multiplyAsteriskIndex + 1])
    );

    fragments[multiplyAsteriskIndex - 1] = String(internalResult);
    fragments.splice(multiplyAsteriskIndex, 2);
  }

  if (
    divisionIndex !== -1 &&
    (divisionIndex > multiplyIndex || divisionIndex > multiplyAsteriskIndex)
  ) {
    const internalResult = division(
      Number(fragments[divisionIndex - 1]),
      Number(fragments[divisionIndex + 1])
    );

    fragments[divisionIndex - 1] = String(internalResult);
    fragments.splice(divisionIndex, 2);
  }
  divisionOrMultiplication(fragments);
}

function Additions(fragments: string[]) {
  const additionIndex = fragments.indexOf('+');

  if (additionIndex !== -1) {
    const internalResult = plus(
      Number(fragments[additionIndex - 1]),
      Number(fragments[additionIndex + 1])
    );

    fragments[additionIndex - 1] = String(internalResult);
    fragments.splice(additionIndex, 2);

    Additions(fragments);
  }
}

function Minus(fragments: string[]) {
  const minusIndex = fragments.indexOf('-');

  if (minusIndex !== -1) {
    const internalResult = minus(
      Number(fragments[minusIndex - 1]),
      Number(fragments[minusIndex + 1])
    );

    fragments[minusIndex - 1] = String(internalResult);
    fragments.splice(minusIndex, 2);

    Minus(fragments);
  }
}

export default (operation: string): number => {
  const numberMultiplies = (operation.match(/(x|\*)/g) || []).length;
  const numberDivisions = (operation.match(/\//g) || []).length;

  const fragments = operation.split(/(-|\+|\*|x|\/)/g);

  if (numberMultiplies > 0 || numberDivisions > 0) {
    divisionOrMultiplication(fragments);
  }

  const numberAdditions = (operation.match(/\+/g) || []).length;

  if (numberAdditions > 0) {
    Additions(fragments);
  }

  const numberMinus = (operation.match(/-/g) || []).length;
  if (numberMinus > 0) {
    Minus(fragments);
  }

  const [result] = fragments;
  return Number(result);
};
