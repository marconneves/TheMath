import TheMath from '../../src';

describe('Create Chain operations | Global Settings - round', () => {
  it('can round 1.2312 to 1', () => {
    const chain = TheMath.createChain({
      round: true
    });
    const result = chain(1.2312).done();
    expect(result).toBe(1);
  });

  it('can round 1.5312 to 2', () => {
    const chain = TheMath.createChain({
      round: true
    });
    const result = chain(1.5312).done();
    expect(result).toBe(2);
  });

  it('can round 13.1 to 2', () => {
    const chain = TheMath.createChain({
      round: true
    });
    const result = chain(13.1).done();
    expect(result).toBe(13);
  });
});

describe('Create Chain operations | Global Settings - round Type', () => {
  it('can round floor 1.9 to 1', () => {
    const chain = TheMath.createChain({
      round: {
        type: 'floor'
      }
    });
    const result = chain(1.9).done();

    expect(result).toBe(1);
  });

  it('can round ceil 1.4 to 2', () => {
    const chain = TheMath.createChain({
      round: {
        type: 'ceil'
      }
    });
    const result = chain(1.4).done();

    expect(result).toBe(2);
  });
});

describe('Create Chain operations | Global Settings - decimal caracteres', () => {
  it('can round floor fixed in 2 decimal 1.91231 to 1.91', () => {
    const chain = TheMath.createChain({
      round: {
        type: 'floor',
        decimal: 2
      }
    });
    const result = chain(1.91231).done();

    expect(result).toBe(1.91);
  });

  it('can round ceil fixed in 4 decimal 1.123123 to 1.1232', () => {
    const chain = TheMath.createChain({
      round: {
        type: 'ceil',
        decimal: 4
      }
    });
    const result = chain(1.123123).done();

    expect(result).toBe(1.1232);
  });
});
