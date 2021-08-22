import TheMath from 'the-math';
import chalk from 'chalk';

import { Flags } from '../utils/parseArgumentsIntoOptions';

const AddCommands = {
  async index(params: string[], flags: Flags): Promise<void> {
    const numbers = params.map(numberString => {
      if (flags.float) {
        return Number(numberString);
      }
      return Math.round(Number(numberString));
    });

    const result = numbers.reduce(
      (previousValue: number, currentValue: number, index, arrayOriginal) => {
        if (flags.verbose && index > 0) {
          console.log(
            '= %s%s',
            chalk.yellow.bold(`${previousValue} + ${currentValue}`),
            chalk.gray.bold(
              arrayOriginal
                .slice(index + 1)
                .map(numberOfArray => ` + ${numberOfArray}`)
                .join('')
            )
          );
        }
        return TheMath.sum(previousValue, currentValue);
      },
      0
    );

    console.log('= %s', chalk.green.bold(result));
  },
  async even(params: string[], flags: Flags): Promise<void> {
    const verifyIsEven = params.filter(number => {
      return Number(number) % 2 !== 0;
    });

    if (verifyIsEven.length > 0) {
      throw new Error('Numero ímpar informado, permitido apenas par!');
    }

    await AddCommands.index(params, flags);
  },
  async odd(params: string[], flags: Flags): Promise<void> {
    const verifyIsOdd = params.filter(number => {
      return Number(number) % 2 === 0;
    });

    if (verifyIsOdd.length > 0) {
      throw new Error('Numero par informado, permitido apenas ímpar!');
    }

    await AddCommands.index(params, flags);
  }
};

export default AddCommands;
