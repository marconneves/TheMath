import divide from './operations/divide';
import subtract from './operations/subtract';
import multiply from './operations/multiply';
import add from './operations/add';

import resolve from './resolve';

const TheMath = {
  subtract,
  s: subtract,
  add,
  a: add,
  divide,
  d: divide,
  multiply,
  m: multiply,
  resolve
};

export default TheMath;
