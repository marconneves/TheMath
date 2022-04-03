import TheMath from '../../src';

describe('Chain operations | Settings done - round', () => {
  it('can round 1.2312 to 1', () => {
    const result = TheMath.chain(1.2312).done({
      round: true
    });
    expect(result).toBe(1);
  });

  it('can round 1.5312 to 2', () => {
    const result = TheMath.chain(1.5312).done({
      round: true
    });
    expect(result).toBe(2);
  });

  it('can round 13.1 to 2', () => {
    const result = TheMath.chain(13.1).done({
      round: true
    });
    expect(result).toBe(13);
  });
});

describe('Chain operations | Settings done - round Type', () => {
  it('can round floor 1.9 to 1', () => {
    const result = TheMath.chain(1.9).done({
      round: {
        type: 'floor'
      }
    });

    expect(result).toBe(1);
  });

  it('can round ceil 1.4 to 2', () => {
    const result = TheMath.chain(1.4).done({
      round: {
        type: 'ceil'
      }
    });

    expect(result).toBe(2);
  });
});

describe('Chain operations | Settings done - precision caracteres', () => {
  it('can round floor fixed in 2 precision 1.91231 to 1.91', () => {
    const result = TheMath.chain(1.91231).done({
      round: {
        type: 'floor',
        precision: 2
      }
    });

    expect(result).toBe(1.91);
  });

  it('can round ceil fixed in 4 precision 1.123123 to 1.1232', () => {
    const result = TheMath.chain(1.123123).done({
      round: {
        type: 'ceil',
        precision: 4
      }
    });

    expect(result).toBe(1.1232);
  });
});

describe('Chain operations | Settings done - Replace Global Settings', () => {
  it('can round floor fixed in 2 precision 1.91231 to 1.91', () => {
    const chain = TheMath.createChain({
      round: {
        type: 'ceil',
        precision: 3
      }
    });
    const result = chain(1.91231).done({
      round: {
        type: 'floor',
        precision: 2
      }
    });

    expect(result).toBe(1.91);
  });

  it('can round ceil fixed in 4 precision 1.123123 to 1.1232', () => {
    const chain = TheMath.createChain({
      round: {
        type: 'floor',
        precision: 1
      }
    });
    const result = chain(1.123123).done({
      round: {
        type: 'ceil',
        precision: 4
      }
    });

    expect(result).toBe(1.1232);
  });
});
