import TheMath from '../../src';

describe('Minus operations', () => {
  it('can calculate 10 minus 5 ', () => {
    const result = TheMath.subtract(10, 5);

    expect(result).toBe(5);
  });

  it('can calculate 5 minus 12', () => {
    const result = TheMath.subtract(5, 12);

    expect(result).toBe(-7);
  });

  it('can calculate 12 minus 0 and inverse', () => {
    const firstResult = TheMath.subtract(12, 0);
    expect(firstResult).toBe(12);

    const secondResult = TheMath.subtract(0, 12);
    expect(secondResult).toBe(-12);
  });

  it('can calculate 1239817239183213 minus 1239817239183123', () => {
    const firstResult = TheMath.subtract(1239817239183213, 1239817239183123);

    expect(firstResult).toBe(90);
  });

  it('can calculate 0.3 minus 0.2', () => {
    const result = TheMath.subtract(0.3, 0.2);

    expect(result).toBe(0.1);
  });

  it('can calculate 41.895 minus 12.2685', () => {
    const result = TheMath.subtract(41.895, 12.2685);

    expect(result).toBe(29.6265);
  });
});
