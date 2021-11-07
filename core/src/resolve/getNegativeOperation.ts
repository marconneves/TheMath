export function getNegativeOperation(fragments: string[]): number {
  let indexNegativeSinal = -1;

  fragments.some((fragment, index) => {
    if (['--', '+-', '*-', 'x-', '/-'].indexOf(fragment) !== -1) {
      indexNegativeSinal = index;
      return true;
    }

    return false;
  });

  return indexNegativeSinal;
}
