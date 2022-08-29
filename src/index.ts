import divide from './operations/divide';
import subtract from './operations/subtract';
import multiply from './operations/multiply';
import sum from './operations/sum';

import resolve from './resolve';
import createChain from './chain';

const chain = createChain();

const TheMath = {
  subtract,
  s: subtract,
  sum,
  a: sum,
  divide,
  d: divide,
  multiply,
  m: multiply,
  resolve,
  chain,
  createChain
};

export { IChainOptions, IChainOptionsGlobal, IRoundOptions } from './chain';
export { resolve, chain };
export default TheMath;
