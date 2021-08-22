/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
import chalk from 'chalk';
import { Options } from './parseArgumentsIntoOptions';

type FunctionExecution<T> = (
  params: string[],
  flags: T
) => Promise<void | null>;

type CommandParams<T> = [string, FunctionExecution<T>];
type SubCommandParams<T> = [string, string, FunctionExecution<T>];

export type CommanderCLI<T> = {
  command(...params: CommandParams<T> | SubCommandParams<T>): void;
};

export function Commander(args: Options) {
  const command = async (
    ...params:
      | CommandParams<typeof args.flags>
      | SubCommandParams<typeof args.flags>
  ) => {
    const [commandString, executionOrSubCommand, execution] = params;
    if (typeof executionOrSubCommand !== 'string') {
      if (commandString !== args.command || !!args.subCommand) {
        return;
      }

      executionOrSubCommand(args.parameters || [], args.flags)
        .then(() => {
          process.exit(1);
        })
        .catch(error => {
          console.log(chalk.red.bold(error.message));
          process.exit(0);
        });
    } else if (execution) {
      if (
        commandString !== args.command ||
        executionOrSubCommand !== args.subCommand
      ) {
        return;
      }

      execution(args.parameters || [], args.flags)
        .then(() => {
          process.exit(1);
        })
        .catch(error => {
          console.log(chalk.red.bold(error.message));
          process.exit(0);
        });
    }
  };

  const functionsReturn: CommanderCLI<typeof args.flags> = {
    command
  };

  return functionsReturn;
}
