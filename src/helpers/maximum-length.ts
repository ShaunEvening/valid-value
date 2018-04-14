import { Validator } from '../typings';

export const maximumLength = (maximumLength: number): Validator =>
  value => value.length <= maximumLength;
