import { validatorMap } from './validator-map';
import {
  Validator,
  ValidatorKey,
  ValidatorOrKey,
  ValidatorOrKeyArray,
} from './typings';

const getValidatorFromMap = (validatorKey: ValidatorKey): Validator => {
  const validatorExists = Boolean(validatorMap[validatorKey]);
  if (!validatorExists) {
    throw new Error(`VALIDATION ERROR: ${validatorKey} is not a validator`);
  }
  return validatorMap[validatorKey];
};

const returnValidatorFunction = (value: ValidatorOrKey): Validator =>
  typeof value === 'string'
    ? getValidatorFromMap(value)
    : value;

export const isValueValid = (value: string, validators: ValidatorOrKeyArray = []): boolean => {
  if (value === undefined || value === null) return false;
  if (validators.length === 0) return true;
  return validators
    .map(validator => returnValidatorFunction(validator)(value))
    .every(x => x);
};
