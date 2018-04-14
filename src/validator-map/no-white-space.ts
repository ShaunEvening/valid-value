import { Validator } from '../typings';

const noSpaceRegex: RegExp = /\s/;
export const noWhiteSpace: Validator = value => !noSpaceRegex.test(value);
