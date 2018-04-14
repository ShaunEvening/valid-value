"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_value_1 = require("./validate-value");
describe('isValueValid(value, [validator, ...])', function () {
    it('NO VALIDATORS: it should retun true if no validators are given', function () {
        var isValid = validate_value_1.isValueValid('');
        expect(isValid).toBeTruthy();
    });
    it('NOT A VALIDATOR: it should throw an error if the validator does not exist', function () {
        var fakeValidatorKey = 'boop';
        var errorString = "VALIDATION ERROR: " + fakeValidatorKey + " is not a validator";
        var errorThrowingValidator = function () { validate_value_1.isValueValid('test-string', [fakeValidatorKey]); };
        expect(errorThrowingValidator).toThrowError(errorString);
    });
    describe('Single Validator:', function () {
        it('REQUIRED: the string length should be greater than 0', function () {
            var valid = validate_value_1.isValueValid('beep', ['required']);
            var invalid = validate_value_1.isValueValid('', ['required']);
            expect(valid).toBeTruthy();
            expect(invalid).toBeFalsy();
        });
        it('CUSTOM VALIDATOR: Should be able to take a custom validator function', function () {
            var colors = {
                red: '#FF0000',
                blue: '#0000FF',
                green: '#008000',
                yellow: '#FFFF00',
            };
            var customValidator = function (value) { return Boolean(colors[value]); };
            var valid = validate_value_1.isValueValid('red', [customValidator]);
            var invalid = validate_value_1.isValueValid('Chartreuse', [customValidator]);
            expect(valid).toBeTruthy();
            expect(invalid).toBeFalsy();
        });
    });
    describe('multiple validators:', function () {
        it('FAILED VALIDATOR: If a validator fails it should return false', function () {
            var invalid = validate_value_1.isValueValid('this-is-a-very-long-string', [
                function (value) { return value.length >= 5; },
                function (// string length should be greater than or equal to 5
                value) { return value.length <= 10; },
            ]);
            expect(invalid).toBeFalsy();
        });
        it('SUCCESSFUL VALIDATORS: If all validators succeed it should return true', function () {
            var valid = validate_value_1.isValueValid('this-is-a-very-long-string', [
                function (value) { return value.length >= 5; },
                function (// string length should be greater than or equal to 5
                value) { return value.length <= 30; },
            ]);
            expect(valid).toBeTruthy();
        });
    });
});
