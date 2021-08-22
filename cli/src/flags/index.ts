import { CommanderCLI } from '../utils/commander';
import { Flags } from '../utils/parseArgumentsIntoOptions';

import HelpFlags from './HelpFlags';
import VersionFlags from './VersionFlags';

export default async (program: CommanderCLI<Flags>): Promise<void> => {
  await program.flag('help', HelpFlags.index);
  await program.flag('help', 'add', HelpFlags.add);
  await program.flag('version', VersionFlags.index);
};
