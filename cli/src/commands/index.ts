import { CommanderCLI } from '../utils/commander';
import { Flags } from '../utils/parseArgumentsIntoOptions';

import AddCommands from './AddCommands';

export default async (program: CommanderCLI<Flags>): Promise<void> => {
  await program.command('add', AddCommands.index);
  await program.command('add', 'even', AddCommands.even);
  await program.command('add', 'odd', AddCommands.odd);
};
