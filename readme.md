![TheMath][the-math-logo]

# TheMath
Lib with function to execute operations arithmetics, and you can resolve string operation with resolve.

## Installation
You can install with [npm][the-math-npm]:
```bash
  npm install the-math
```

You can install with [yarn][the-math-yarn]:
```bash
  yarn add the-math
```

## Features

- chain     - Solve a chain of complex operations.
- subtract  - Solve subtraction between 2 numbers.
- Sum       - Solve sum between 2 numbers.
- divide    - Solve division between 2 numbers.
- multiply  - Solve multiplication between 2 numbers.
- resolve   - Solve a string operation arithmetic.

## Exemples

**1.** Solve a chain of complex operations.

```TypeScript
import TheMath from 'the-math';

const chain = TheMath.createChain({
  round: {
    type: 'floor',
    precision: 2
  }
});
const result = chain(4.91231).plus(2.12413).done();
// result: 7.03
```

**2.** Solve subtraction between 2 numbers.

```TypeScript
import TheMath from 'the-math';

const result = TheMath.subtract(10, 3);
// result: 7
```

**3.** Solve sum between 2 numbers.

```TypeScript
import TheMath from 'the-math';

const result = TheMath.sum(14, 7);
// result: 21
```

**4.** Solve division between 2 numbers.

```TypeScript
import TheMath from 'the-math';

const result = TheMath.divide(21, 3);
// result: 7
```

**5.** Solve multiplication between 2 numbers.

```TypeScript
import TheMath from 'the-math';

const result = TheMath.multiply(6, 3);
// result: 18
```

**6.** Solve a string operation arithmetic.

```TypeScript
import TheMath from 'the-math';

const result = TheMath.resolve('12+4*3*9/2+1');
// result: 67
```

## Contributors

| [<img src="https://github.com/allyfx.png" width=115><br><sub>@allyfx</sub>](https://github.com/allyfx) |
| :---: |

## Author

| [<img src="https://github.com/TheMarkWill.png" width=115><br><sub>@TheMarkWill</sub>](https://github.com/TheMarkWill) |
| :---: |

<!-- Markdown link & img's -->
[license-link]: /LICENSE
[the-math-logo]: https://i.imgur.com/yxNTfFh.png
[the-math-npm]: https://www.npmjs.com/package/the-math
[the-math-yarn]: https://yarnpkg.com/package/the-math
