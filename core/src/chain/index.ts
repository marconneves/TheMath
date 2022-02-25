import divide from '../operations/divide';
import multiply from '../operations/multiply';
import subtract from '../operations/subtract';
import sum from '../operations/sum';

interface IChain {
  divide(divisor: number): IChain;
  multiply(multiplier: number): IChain;
  subtract(subtractor: number): IChain;
  add(adder: number): IChain;
  done(): number;
}

function chain(startNumber: number): IChain {
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
    done(): number {
      return startNumber;
    }
  };
}

export default chain;
