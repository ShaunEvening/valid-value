# valid-value
Extendable validation utility library for typescript and javascript

## Getting Started

```bash
# Install the package
npm install --save valid-value

# Or use yarn
Yarn add valid-value

```

## Contributing

```bash
# Fork and clone the repository
git clone https://github.com/<GITHUB_USERNAME>/valid-value.git

# Move into the directory
cd valid-value

# Add the main repository as your upstream remote
git remote add upstream https://github.com/ShaunLloyd/valid-value.git
```

**Before contributing, please:**
- Make sure there is a github issue requesting your fix / addition. This can be from you or someone else.

- Make sure your new code is tested

- Make sure your branch is up to date with the current master branch

## Documentation

### `isValueValid(value: string, validators: ValidatorOrKeyArray) => boolean`

Params:
- value - `string`: The string value for validation
- validators - `Array`: An array of strings keys for the included validators and custom validator functions

Returns: `boolean`

#### Basic Example:
This package comes with some built in validators. To use them, add the names of those validators to the validator array. Check our full list of built in validators [here](#built-in-validators)

```ts
import { isValueValid } from 'valid-value';

const isValid = isValueValid('test-string', ['required']);

console.log(isValid) // => returns true
```

#### Custom Validator Example:
Adding custom validation rules is easy. Add a function that takes in a string value and returns a boolean.

```ts
import { isValueValid } from 'valid-value';

const isValid = isValueValid('test-4-string', [
  value => !/\d/.test(value), // string must not contain numbers
]);

console.log(isValid) // => returns false
```

## Built In Validators

There are a list of built in validators to use

|  Validator Key | Description |
|:--------------:|:-----------:|
|   'required'   | String length must be greater than zero |
| 'noWhiteSpace' | String must not include any whitespace characters including space, tab, and newline |

## Validator Helpers

There is also a collection of helper functions to create validators that can be used

### `minimumLength(min: number)`

Params:
- min - `number`: the minimum length of value

Returns: `(value: string): boolean => value.length >= min`

`minimumLength` is a function that takes in a number and returns a validator function that checks the string value length is greater than or equal to the given number.

#### Example:
```ts
import { isValueValid } from 'valid-value';
import { minimumLength } from 'valid-value/helpers';

const isValid = isValueValid('test string', [
  // returns a validator to check for
  // a minimum length of 5
  minimumLength(5)
]);
```
---
### `maximumLength(max: number)`

Params:
- max - `number`: the maximum length of value

Returns: `(value: string): boolean => value.length <= max`

`maximumLength` is a function that takes in a number and returns a validator function that checks the string value length is less than or equal to the given number.

#### Example:
```ts
import { isValueValid } from 'valid-value';
import { maximumLength } from 'valid-value/helpers';

const isValid = isValueValid('test string', [
  // returns a validator to check for
  // a maximum length of 15
  maximumLength(15)
]);
```
---
### `lengthInRange(min: number, max: number)`

Params:
- min - `number`: the minimum length of value
- max - `number`: the maximum length of value

Returns: `(value: string): boolean => value.length >= min && value.length <= max`

`lengthInRange` is a function that takes in a minimum and maximum length and returns a validator function that checks the string value length is with in range of the minimum and maximum values inclusive.

#### Example:
```ts
import { isValueValid } from 'valid-value';
import { lengthInRange } from 'valid-value/helpers';

const isValid = isValueValid('test string', [
  // returns a validator to check for a length
  // between 5 and 15 inclusive
  lengthInRange(5, 15)
]);
```
---
