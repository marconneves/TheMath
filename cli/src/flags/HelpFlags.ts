import chalk from 'chalk';

export default {
  async index(): Promise<void> {
    console.log(chalk`{green.bold Help: TheMath}

{green.bold Flags:}
  {cyan.bold --help, -h:} For you get help with this lib.
    {bgGray ┌ Ex.: ───────────────────────────────────────────────┐}
    {bgGray │  > tm -h - Request help to completed program.       │}
    {bgGray │  tm -h add - Request help to internal command add.  │}
    {bgGray └─────────────────────────────────────────────────────┘}

  {cyan.bold --version, -v:} Get version of program.
  {cyan.bold --verbose:} Get logs of operations.

{green.bold Commands:}
  {cyan.bold add:} To sum multiples numbers.
  {cyan.bold subtract:} To subtract multiples numbers.
    `);
  },
  async add(): Promise<void> {
    console.log(chalk`{green.bold Help: add command}

With add command you can sum multiples numbers, float or int.
  {cyan.bold add float:} You can use flag {bgGray.bold  --float } , {bgGray.bold  -f }  to add float number.
  {cyan.bold add even or odd:} You can use subCommand {bgGray.bold  odd } or {bgGray.bold  even } to get only number of this types.
  {cyan.bold log operation:} You can use flag {bgGray.bold  --verbose } to see log of operations, number to number.
  {bgGray ┌ Ex.: ───────────────────────────────┐}
  {bgGray │  > tm add 5 123 1                   │}
  {bgGray │  > tm add -f 5.1 123.2 0.1          │}
  {bgGray │  > tm add even 2 124 20             │}
  {bgGray │  > tm add odd 3 7 121               │}
  {bgGray └─────────────────────────────────────┘}
    `);
  },
  async subtract(): Promise<void> {
    console.log(chalk`{green.bold Help: subtract command}

With add command you can subtract multiples numbers, float or int.
  {cyan.bold add float:} You can use flag {bgGray.bold  --float } , {bgGray.bold  -f }  to add float number.
  {cyan.bold log operation:} You can use flag {bgGray.bold  --verbose } to see log of operations, number to number.
  {bgGray ┌ Ex.: ───────────────────────────────┐}
  {bgGray │  > tm subtract 5 123 1              │}
  {bgGray │  > tm subtract -f 5.1 123.2 0.1     │}
  {bgGray └─────────────────────────────────────┘}
    `);
  },
  async multiply(): Promise<void> {
    console.log(chalk`{green.bold Help: multiply command}

With add command you can multiply multiples numbers, float or int.
  {cyan.bold add float:} You can use flag {bgGray.bold  --float } , {bgGray.bold  -f }  to add float number.
  {cyan.bold log operation:} You can use flag {bgGray.bold  --verbose } to see log of operations, number to number.
  {bgGray ┌ Ex.: ───────────────────────────────┐}
  {bgGray │  > tm multiply 5 123 1              │}
  {bgGray │  > tm multiply -f 5.1 123.2 0.1     │}
  {bgGray └─────────────────────────────────────┘}
    `);
  },
  async divide(): Promise<void> {
    console.log(chalk`{green.bold Help: divide command}

With add command you can divide multiples numbers, float or int.
  {cyan.bold add float:} You can use flag {bgGray.bold  --float } , {bgGray.bold  -f }  to add float number.
  {cyan.bold log operation:} You can use flag {bgGray.bold  --verbose } to see log of operations, number to number.
  {bgGray ┌ Ex.: ───────────────────────────────┐}
  {bgGray │  > tm divide 5 123 1                │}
  {bgGray │  > tm divide -f 5.1 123.2 0.1       │}
  {bgGray └─────────────────────────────────────┘}
    `);
  }
};
