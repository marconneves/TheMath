/* eslint-disable no-param-reassign */
import { getBracketOperation } from './getBracketOperation';

import multiply from '../operations/multiply';
import divide from '../operations/divide';
import sum from '../operations/sum';
import subtract from '../operations/subtract';
import { getNegativeOperation } from './getNegativeOperation';

function divisionOrMultiplication(fragments: string[]) {
  const multiplyIndexX = fragments.indexOf('x');
  const multiplyAsteriskIndex = fragments.indexOf('*');
  const multiplyIndex =
    multiplyIndexX > multiplyAsteriskIndex
      ? multiplyIndexX
      : multiplyAsteriskIndex;
  const divisionIndex = fragments.indexOf('/');

  if (multiplyIndex === -1 && divisionIndex === -1) {
    return;
  }

  if (
    multiplyIndex !== -1 &&
    (multiplyIndex < divisionIndex || divisionIndex === -1)
  ) {
    const internalResult = multiply(
      Number(fragments[multiplyIndex - 1]),
      Number(fragments[multiplyIndex + 1])
    );

    fragments[multiplyIndex - 1] = String(internalResult);
    fragments.splice(multiplyIndex, 2);
  }

  if (
    divisionIndex !== -1 &&
    (divisionIndex < multiplyIndex || multiplyIndex === -1)
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
    const internalResult = sum(
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

function resolveNegativeNumber(fragments: string[]) {
  const numberNegative = getNegativeOperation(fragments);

  if (numberNegative === -1) {
    return;
  }

  const internalResult = multiply(Number(fragments[numberNegative + 1]), -1);

  fragments[numberNegative + 1] = String(internalResult);

  if (fragments[numberNegative] === '-') {
    fragments.shift();
  } else {
    fragments[numberNegative] = fragments[numberNegative].slice(0, 1);
  }

  resolveNegativeNumber(fragments);
}

type Arguments = { [key: string]: number };

function resolveArguments(fragments: string[], parameters: Arguments) {
  fragments.forEach((fragment, index) => {
    if (parameters[fragment]) {
      fragments[index] = String(parameters[fragment]);
    }
  });
}

function resolve(operation: string, parameters?: Arguments): number {
  const fragments = (
    operation?.split(/(--?|\+-?|\*-?|x-?|\/-?|\(|\))/g) || []
  ).filter(value => value);

  if (parameters) resolveArguments(fragments, parameters);

  resolveNegativeNumber(fragments);

  resolveBracket(fragments);

  resolveOperations(fragments);

  const [result] = fragments;
  return Number(result);
}

export default resolve;
