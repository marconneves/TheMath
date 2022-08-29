export function getBracketOperation(fragments: string[]): [number, number] {
  let openIndex = -1;
  let closeIndex = -1;

  fragments.every((fragment, index) => {
    if (fragment === '(') {
      openIndex = index;
    }

    if (fragment === ')') {
      closeIndex = index;
    }

    if (openIndex !== -1 && closeIndex !== -1) {
      return false;
    }

    return true;
  });

  return [openIndex, closeIndex];
}
