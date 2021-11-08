import { Flags } from './parseArgumentsIntoOptions';

export default (result: number, flags: Flags): number => {
  const resultRound = flags.round ? result.toFixed(flags.fixe) : result;

  return Number(resultRound);
};
