export declare type ValidatorKey = string;
export declare type Validator = (value: string) => boolean;
export declare type ValidatorOrKey = Validator | ValidatorKey;
export declare type ValidatorOrKeyArray = ValidatorOrKey[];
