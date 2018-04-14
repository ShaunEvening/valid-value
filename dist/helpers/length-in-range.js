"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthInRange = function (minimumLength, maximumLength) {
    return function (value) { return value.length >= minimumLength && value.length <= maximumLength; };
};
