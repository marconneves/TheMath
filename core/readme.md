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

- subtract  - Solve subtraction between 2 numbers.
- Sum       - Solve sum between 2 numbers.
- divide    - Solve division between 2 numbers.
- multiply  - Solve multiplication between 2 numbers.
- resolve   - Solve a string operation arithmetic.

## Exemples

**1.** Solve subtraction between 2 numbers.

```TypeScript
import TheMath from 'the-math';

const result = TheMath.subtract(10, 3);
// result: 7
```

**2.** Solve subtraction between 2 numbers.

```TypeScript
import TheMath from 'the-math';

const result = TheMath.sum(14, 7);
// result: 21
```

**3.** Solve division between 2 numbers.

```TypeScript
import TheMath from 'the-math';

const result = TheMath.divide(21, 3);
// result: 7
```

**4.** Solve multiplication between 2 numbers.

```TypeScript
import TheMath from 'the-math';

const result = TheMath.multiply(6, 3);
// result: 18
```

**5.** Solve a string operation arithmetic.

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


# Calculator Exercise

**Tier:** 1-Beginner

Calculators are not only one of the most useful tools available, but they are
also a great way to understand UI and event processing in an application. In
this problem you will create a calculator that supports basic arithmetic
calculations on integers.

The styling is up to you so use your imagination and get creative! You might
also find it worth your time to experiment with the calculator app on your
mobile device to better understand basic functionality and edge cases.

### Constraints

- You may not use the `eval()` function to execute calculations

****
This project is under the MIT license. See the [LICENSE][license-link] file for more details.


<!-- Markdown link & img's -->
[license-link]: /LICENSE
[the-math-logo]: https://i.imgur.com/yxNTfFh.png
[the-math-npm]: https://www.npmjs.com/package/the-math
[the-math-yarn]: https://yarnpkg.com/package/the-math
