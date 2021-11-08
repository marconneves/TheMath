import TheMath from '../../src';

describe('Plus Operations', () => {
  test('can resolve sum 5 with 3', () => {
    const actual = TheMath.sum(5, 3);

    expect(actual).toBe(8);
  });

  test('can resolve sum 0.1 with 0.2', () => {
    const actual = TheMath.sum(0.1, 0.2);

    expect(actual).toBe(0.3);
  });

  test('can resolve sum 812 with -812', () => {
    const actual = TheMath.sum(812, -812);

    expect(actual).toBe(0);
  });

  test('can resolve sum -74 with -82', () => {
    const actual = TheMath.sum(-74, -82);

    expect(actual).toBe(-156);
  });

  test('can resolve sum 123 with -101', () => {
    const actual = TheMath.sum(123, -101);

    expect(actual).toBe(22);
  });

  test('can resolve sum 12 with -34', () => {
    const actual = TheMath.sum(12, -34);

    expect(actual).toBe(-22);
  });

  test('can resolve sum 6 with -412', () => {
    const actual = TheMath.sum(6, -412);

    expect(actual).toBe(-406);
  });
});
