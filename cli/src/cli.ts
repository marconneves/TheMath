/* eslint-disable no-console */
import { parseArgumentsIntoOptions } from './utils/parseArgumentsIntoOptions';
import { Commander } from './utils/commander';

import flags from './flags';
import commands from './commands';

export async function cli(rawArgs: string[]): Promise<void> {
  const args = parseArgumentsIntoOptions(rawArgs);

  const program = Commander(args);

  await flags(program);
  await commands(program);
}
