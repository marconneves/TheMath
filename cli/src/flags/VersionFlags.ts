/* eslint-disable import/extensions */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import chalk from 'chalk';

export default {
  async index(): Promise<void> {
    const version = require('../../package').version || 'error';

    console.log(chalk`{green.bold TheMath:} v${version}
{green.bold NodeJS:} ${process.version}
`);
  }
};
