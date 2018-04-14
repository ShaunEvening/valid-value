import { Validator } from '../typings';

export const required: Validator = (value: string) => value.length > 0;
