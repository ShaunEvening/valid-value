"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var minimum_length_1 = require("./minimum-length");
describe('minimumLength(minimumLength)', function () {
    describe('VALIDATOR', function () {
        var validator = minimum_length_1.minimumLength(5);
        it('Validator should return true when value length is equal to minimum length', function () {
            var isValid = validator('tests');
            expect(isValid).toBeTruthy();
        });
        it('Validator should return true when value length is greater than minimum length', function () {
            var isValid = validator('test should pass');
            expect(isValid).toBeTruthy();
        });
        it('Validator should return false when value length is less than minimum length', function () {
            var isNotValid = validator('FAIL');
            expect(isNotValid).toBeFalsy();
        });
    });
});
