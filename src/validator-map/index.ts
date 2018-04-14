import { required } from './required';
import { noWhiteSpace } from './no-white-space';
import { Validator } from '../typings';

export type ValidatorMap = { [key: string]: Validator };
export const validatorMap: ValidatorMap = {
  required,
  noWhiteSpace,
};
