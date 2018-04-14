"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maximum_length_1 = require("./maximum-length");
describe('minimumLength(minimumLength)', function () {
    describe('VALIDATOR', function () {
        var validator = maximum_length_1.maximumLength(10);
        it('Validator should return true when value length is equal to maximum length', function () {
            var isValid = validator('tests pass');
            expect(isValid).toBeTruthy();
        });
        it('Validator should return true when value length is less than maximum length', function () {
            var isValid = validator('PASS');
            expect(isValid).toBeTruthy();
        });
        it('Validator should return false when value length is less than minimum length', function () {
            var isNotValid = validator('YOU SHALL NOT PASS');
            expect(isNotValid).toBeFalsy();
        });
    });
});
