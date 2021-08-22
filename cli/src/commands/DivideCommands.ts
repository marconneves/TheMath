import TheMath from 'the-math';
import chalk from 'chalk';

import { Flags } from '../utils/parseArgumentsIntoOptions';

const DivideCommands = {
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
          const restParams = arrayOriginal
            .slice(index + 1)
            .map(numberOfArray => ` ÷ ${numberOfArray}`);

          console.log(
            restParams.length > 0 ? '= %s%s' : '= %s',
            chalk.yellow.bold(`${previousValue} ÷ ${currentValue}`),
            chalk.gray.bold(restParams.join(''))
          );
        }

        if (!previousValue) {
          return currentValue;
        }

        return TheMath.divide(previousValue, currentValue);
      }
    );

    console.log('= %s', chalk.green.bold(result));
  }
};

export default DivideCommands;
