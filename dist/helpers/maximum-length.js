"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximumLength = function (maximumLength) {
    return function (value) { return value.length <= maximumLength; };
};
