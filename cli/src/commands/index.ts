import { CommanderCLI } from '../utils/commander';
import { Flags } from '../utils/parseArgumentsIntoOptions';

import AddCommands from './AddCommands';
import SubtractCommands from './SubtractCommands';
import MultiplyCommands from './MultiplyCommands';
import DivideCommands from './DivideCommands';

export default async (program: CommanderCLI<Flags>): Promise<void> => {
  await program.command('add', AddCommands.index);
  await program.command('add', 'even', AddCommands.even);
  await program.command('add', 'odd', AddCommands.odd);

  await program.command('subtract', SubtractCommands.index);

  await program.command('multiply', MultiplyCommands.index);

  await program.command('divide', DivideCommands.index);
};
