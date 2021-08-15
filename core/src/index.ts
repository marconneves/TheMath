import division from './operations/division';
import minus from './operations/minus';
import multiplication from './operations/multiplication';
import plus from './operations/plus';

import resolve from './resolve';

const TheMath = {
  minus,
  m: minus,
  plus,
  p: plus,
  division,
  dv: division,
  multiplication,
  ml: multiplication,
  resolve
};

export default TheMath;
