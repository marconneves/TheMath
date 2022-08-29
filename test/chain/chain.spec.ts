import TheMath from '../../src';

describe('Chain operations', () => {
  it('can calculate 6 divide 2 after add 3', () => {
    const result = TheMath.chain(6).divide(2).add(3).done();

    expect(result).toBe(6);
  });

  it('can calculate 3 add 6 after divide 2', () => {
    const result = TheMath.chain(3).add(6).divide(2).done();

    expect(result).toBe(4.5);
  });
});
