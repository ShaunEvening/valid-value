"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_map_1 = require("./validator-map");
var getValidatorFromMap = function (validatorKey) {
    var validatorExists = Boolean(validator_map_1.validatorMap[validatorKey]);
    if (!validatorExists) {
        throw new Error("VALIDATION ERROR: " + validatorKey + " is not a validator");
    }
    return validator_map_1.validatorMap[validatorKey];
};
var returnValidatorFunction = function (value) {
    return typeof value === 'string'
        ? getValidatorFromMap(value)
        : value;
};
exports.isValueValid = function (value, validators) {
    if (validators === void 0) { validators = []; }
    if (value === undefined || value === null)
        return false;
    if (validators.length === 0)
        return true;
    return validators
        .map(function (validator) { return returnValidatorFunction(validator)(value); })
        .every(function (x) { return x; });
};
