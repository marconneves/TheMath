import { CommanderCLI } from '../utils/commander';
import { Flags } from '../utils/parseArgumentsIntoOptions';

import AddCommands from './AddCommands';
import SubtractCommands from './SubtractCommands';

export default async (program: CommanderCLI<Flags>): Promise<void> => {
  await program.command('add', AddCommands.index);
  await program.command('add', 'even', AddCommands.even);
  await program.command('add', 'odd', AddCommands.odd);

  await program.command('subtract', SubtractCommands.index);
};
