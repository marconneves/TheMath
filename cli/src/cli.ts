/* eslint-disable no-console */
import { parseArgumentsIntoOptions } from './utils/parseArgumentsIntoOptions';
import commands from './commands';
import { Commander } from './utils/commander';

export async function cli(rawArgs: string[]): Promise<void> {
  const args = parseArgumentsIntoOptions(rawArgs);

  const program = Commander(args);
  commands(program);
}
