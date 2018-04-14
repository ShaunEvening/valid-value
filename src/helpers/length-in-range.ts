import { Validator } from '../typings';

export const lengthInRange = (minimumLength: number, maximumLength: number): Validator =>
  value => value.length >= minimumLength && value.length <= maximumLength;
