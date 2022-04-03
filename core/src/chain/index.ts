import divide from '../operations/divide';
import multiply from '../operations/multiply';
import subtract from '../operations/subtract';
import sum from '../operations/sum';
import round from './round';

export interface IRoundOptions {
  /**
   * @default 'round'
   * @doc
   * floor - rounds down
   *
   * ceil - rounds up
   *
   * round - rounds to nearest
   */
  type?: 'floor' | 'ceil' | 'round';
  decimal?: number;
}

export interface IChainOptions {
  round?: boolean | IRoundOptions;
}

export interface IChainOptionsGlobal {
  round?: IRoundOptions;
}

export interface IChain {
  divide(divisor: number): IChain;
  multiply(multiplier: number): IChain;
  subtract(subtractor: number): IChain;
  add(adder: number): IChain;
  done(options?: IChainOptions): number;
}

function createChain(globalInitOptions?: IChainOptions) {
  const globalOptions = { ...globalInitOptions } as IChainOptionsGlobal;
  if (typeof globalInitOptions?.round === 'boolean') {
    globalOptions.round = { type: 'round' };
  }

  return function chain(startNumber: number): IChain {
    return {
      divide(divisor: number): IChain {
        return chain(divide(startNumber, divisor));
      },
      multiply(multiplier: number): IChain {
        return chain(multiply(startNumber, multiplier));
      },
      subtract(subtractor: number): IChain {
        return chain(subtract(startNumber, subtractor));
      },
      add(adder: number): IChain {
        return chain(sum(startNumber, adder));
      },
      done(options): number {
        const operation = {
          number: startNumber
        };

        if (globalOptions.round || options?.round) {
          let roundOptions = {};

          if (typeof options?.round !== 'boolean') {
            roundOptions = {
              roundType: options?.round?.type || globalOptions.round?.type,
              decimal: options?.round?.decimal || globalOptions.round?.decimal
            };
          }

          round(operation, roundOptions);
        }

        return operation.number;
      }
    };
  };
}
export default createChain;
