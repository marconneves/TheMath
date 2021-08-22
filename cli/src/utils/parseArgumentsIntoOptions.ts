import arg from 'arg';

export type Flags = {
  help: boolean;
  float: boolean;
  verbose: boolean;
};

export type Options = {
  flags: Flags;
  command?: string;
  subCommand?: string;
  parameters?: string[];
};

export function parseArgumentsIntoOptions(rawArgs: string[]): Options {
  const args = arg(
    {
      '--help': Boolean,
      '--float': Boolean,
      '--verbose': Boolean,
      '-h': '--help',
      '-f': '--float',
      '-v': '--verbose'
    },
    {
      argv: rawArgs.slice(2)
    }
  );

  const possiblesSubCommands: { [key: string]: string[] } = {
    add: ['even', 'odd']
  };

  const command = args._[0];

  let subCommand: string | null = null;
  if (possiblesSubCommands[command]) {
    subCommand =
      possiblesSubCommands[command].find(
        argInternal => args._[1] === argInternal
      ) || null;
  }

  return {
    flags: {
      help: args['--help'] || false,
      float: args['--float'] || false,
      verbose: args['--verbose'] || false
    },
    command: args._[0],
    ...(subCommand && { subCommand }),
    parameters: args._.slice(subCommand ? 2 : 1)
  };
}
