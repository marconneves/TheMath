import { CommanderCLI } from '../utils/commander';
import { Flags } from '../utils/parseArgumentsIntoOptions';
import AddCommands from './AddCommands';

export default (program: CommanderCLI<Flags>): void => {
  program.command('add', AddCommands.index);
  program.command('add', 'even', AddCommands.even);
  program.command('add', 'odd', AddCommands.odd);
};
