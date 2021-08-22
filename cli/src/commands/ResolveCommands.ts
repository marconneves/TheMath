import TheMath from 'the-math';
import chalk from 'chalk';

import { Flags } from '../utils/parseArgumentsIntoOptions';
import fixeResult from '../utils/fixeResult';

const MultiplyCommands = {
  async index(params: string[], flags: Flags): Promise<void> {
    const operation = params.join('');

    console.log(operation);

    const result = TheMath.resolve(operation);

    console.log('= %s', chalk.green.bold(fixeResult(result, flags)));
  }
};

export default MultiplyCommands;
