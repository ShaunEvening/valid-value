"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var required_1 = require("./required");
describe('VALIDATOR: required', function () {
    it('VALID: it should return true when the string length is great than 0', function () {
        var isValid = required_1.required('test');
        expect(isValid).toBeTruthy();
    });
    it('NOT VALID: it should return false when the string length is 0', function () {
        var isNotValid = required_1.required('');
        expect(isNotValid).toBeFalsy();
    });
});
