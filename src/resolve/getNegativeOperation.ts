export function getNegativeOperation(fragments: string[]): number {
  let indexNegativeSinal = -1;

  if (fragments[0] === '-') {
    return 0;
  }

  fragments.some((fragment, index) => {
    if (['--', '+-', '*-', 'x-', '/-'].indexOf(fragment) !== -1) {
      indexNegativeSinal = index;
      return true;
    }

    return false;
  });

  return indexNegativeSinal;
}
