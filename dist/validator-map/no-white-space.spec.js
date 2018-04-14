"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_white_space_1 = require("./no-white-space");
describe('VALIDATOR: noWhiteSpace', function () {
    it('VALID: it should return true when the string has no spaces', function () {
        var isValid = no_white_space_1.noWhiteSpace('test-this-string');
        expect(isValid).toBeTruthy();
    });
    it('NOT VALID: it should return false when the string includes spaces', function () {
        var isNotValid = no_white_space_1.noWhiteSpace('test this string');
        expect(isNotValid).toBeFalsy();
    });
    it('NOT VALID: it should return false when the string includes a tab', function () {
        var isNotValid = no_white_space_1.noWhiteSpace("\ttabbed string");
        expect(isNotValid).toBeFalsy();
    });
    it('NOT VALID: it should return false when the string includes a newline', function () {
        var isNotValid = no_white_space_1.noWhiteSpace("you\nshall\nnot\npass");
        expect(isNotValid).toBeFalsy();
    });
});
