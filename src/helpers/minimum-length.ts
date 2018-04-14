import { Validator } from '../typings';

export const minimumLength = (minimumLength: number): Validator =>
  value => value.length >= minimumLength;
