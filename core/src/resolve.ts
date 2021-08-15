/* eslint-disable no-param-reassign */
import multiply from './operations/multiply';
import divide from './operations/divide';
import add from './operations/add';
import subtract from './operations/subtract';

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
    const internalResult = multiply(
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
    const internalResult = multiply(
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
    const internalResult = divide(
      Number(fragments[divisionIndex - 1]),
      Number(fragments[divisionIndex + 1])
    );

    fragments[divisionIndex - 1] = String(internalResult);
    fragments.splice(divisionIndex, 2);
  }
  divisionOrMultiplication(fragments);
}

function additionsOrSubtract(fragments: string[]) {
  const subtractIndex = fragments.indexOf('-');
  const addIndex = fragments.indexOf('+');

  if (subtractIndex === -1 && addIndex === -1) {
    return;
  }

  if (subtractIndex !== -1 && subtractIndex > addIndex) {
    const internalResult = subtract(
      Number(fragments[subtractIndex - 1]),
      Number(fragments[subtractIndex + 1])
    );

    fragments[subtractIndex - 1] = String(internalResult);
    fragments.splice(subtractIndex, 2);
  }

  if (addIndex !== -1 && addIndex > subtractIndex) {
    const internalResult = add(
      Number(fragments[addIndex - 1]),
      Number(fragments[addIndex + 1])
    );

    fragments[addIndex - 1] = String(internalResult);
    fragments.splice(addIndex, 2);
  }

  additionsOrSubtract(fragments);
}

export default (operation: string): number => {
  const fragments = operation.split(/(-|\+|\*|x|\/)/g);

  const numberMultiplies = (operation.match(/(x|\*)/g) || []).length;
  const numberDivisions = (operation.match(/\//g) || []).length;
  if (numberMultiplies > 0 || numberDivisions > 0) {
    divisionOrMultiplication(fragments);
  }

  const numberAdditions = (operation.match(/\+/g) || []).length;
  const numberMinus = (operation.match(/-/g) || []).length;
  if (numberAdditions > 0 || numberMinus > 0) {
    additionsOrSubtract(fragments);
  }

  const [result] = fragments;
  return Number(result);
};
