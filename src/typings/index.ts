export type ValidatorKey = string;
export type Validator = (value: string) => boolean;
export type ValidatorOrKey = Validator | ValidatorKey;
export type ValidatorOrKeyArray = ValidatorOrKey[];
