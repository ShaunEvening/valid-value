"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimumLength = function (minimumLength) {
    return function (value) { return value.length >= minimumLength; };
};
