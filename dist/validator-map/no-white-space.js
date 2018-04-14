"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noSpaceRegex = /\s/;
exports.noWhiteSpace = function (value) { return !noSpaceRegex.test(value); };
