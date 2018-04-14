"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var length_in_range_1 = require("./length-in-range");
describe('lengthInRange(minimumLength, maximumLength)', function () {
    describe('VALIDATOR', function () {
        var validator = length_in_range_1.lengthInRange(5, 10);
        it('Validator should return true when string length is equal to the minimum length', function () {
            var isValid = validator('tests');
            expect(isValid).toBeTruthy();
        });
        it('Validator should return true when string length is equal to the maximum length', function () {
            var isValid = validator('tests pass');
            expect(isValid).toBeTruthy();
        });
        it('Validator should return true when string length is within range', function () {
            var isValid = validator('1234567');
            expect(isValid).toBeTruthy();
        });
        it('Validator should return false when string length is less than minimum length', function () {
            var isNotValid = validator('test');
            expect(isNotValid).toBeFalsy();
        });
        it('Validator should return false when string length is greater than maximum length', function () {
            var isNotValid = validator('you shall not pass');
            expect(isNotValid).toBeFalsy();
        });
    });
});
