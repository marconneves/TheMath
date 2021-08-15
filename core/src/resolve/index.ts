/* eslint-disable no-param-reassign */
import { getBracketOperation } from './getBracketOperation';

import multiply from '../operations/multiply';
import divide from '../operations/divide';
import add from '../operations/add';
import subtract from '../operations/subtract';

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

function resolveOperations(fragments: string[]) {
  const numberMultipliesOrDivision = fragments.filter(value =>
    /(x|\*|\/)/g.test(value)
  ).length;

  if (numberMultipliesOrDivision > 0) {
    divisionOrMultiplication(fragments);
  }

  const numberAdditionsOrMinus = fragments.filter(value =>
    /(\+|-)/g.test(value)
  ).length;

  if (numberAdditionsOrMinus > 0) {
    additionsOrSubtract(fragments);
  }
}

function resolveBracket(fragments: string[]) {
  const numberBrackets = fragments.filter(value =>
    /(\(|\)W)/g.test(value)
  ).length;

  if (numberBrackets > 0) {
    const [openIndex, closeIndex] = getBracketOperation(fragments);

    const bracketOperation = fragments.splice(
      openIndex + 1,
      closeIndex - openIndex - 1
    );

    resolveOperations(bracketOperation);

    const [resultBracketOperation] = bracketOperation;

    fragments[openIndex] = resultBracketOperation;
    fragments.splice(openIndex + 1, 1);

    resolveBracket(fragments);
  }
}

export default (operation: string): number => {
  const fragments = (operation.split(/(-|\+|\*|x|\/|\(|\))/g) || []).filter(
    value => value
  );

  resolveBracket(fragments);

  resolveOperations(fragments);

  const [result] = fragments;
  return Number(result);
};
