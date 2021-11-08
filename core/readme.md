# TheMath
Lib with function to execute operations arithmetics, and you can resolve string operation with resolve.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/package/the-math).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

Use npm:
```
$ npm install the-math
```

Use yarn:
```
$ yarn add the-math
```

## Features

- subtract  - Solve subtraction between 2 numbers.
- Sum       - Solve sum between 2 numbers.
- divide    - Solve division between 2 numbers.
- multiply  - Solve multiplication between 2 numbers.
- resolve   - Solve a string operation arithmetic.

## Exemples

1. Solve subtraction between 2 numbers.

```typescript
import TheMath from 'the-math';

const result = TheMath.subtract(10, 3);
// result: 7

```

2. Solve subtraction between 2 numbers.

```typescript
import TheMath from 'the-math';

const result = TheMath.sum(14, 7);
// result: 21

```

3. Solve division between 2 numbers.

```typescript
import TheMath from 'the-math';

const result = TheMath.divide(21, 3);
// result: 7

```

4. Solve multiplication between 2 numbers.

```typescript
import TheMath from 'the-math';

const result = TheMath.multiply(6, 3);
// result: 18

```

5. Solve a string operation arithmetic.

```typescript
import TheMath from 'the-math';

const result = TheMath.resolve('12+4*3*9/2+1');
// result: 67

```

## Contributors

| [<img src="https://github.com/allyfx.png" width=115><br><sub>@allyfx</sub>](https://github.com/allyfx) |
| :---: |

## Author

| [<img src="https://github.com/MarconWillian.png" width=115><br><sub>@MarconWillian</sub>](https://github.com/MarconWillian) |
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
