import { CommanderCLI } from '../utils/commander';
import { Flags } from '../utils/parseArgumentsIntoOptions';
import AddCommands from './AddCommands';

export default (app: CommanderCLI<Flags>): void => {
  app.command('add', AddCommands.index);
  app.command('add', 'even', AddCommands.even);
  app.command('add', 'odd', AddCommands.odd);
};
