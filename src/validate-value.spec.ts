import { isValueValid } from './validate-value';
import { Validator } from './typings';

describe('isValueValid(value, [validator, ...])', () => {
  it('NO VALIDATORS: it should retun true if no validators are given', () => {
    const isValid = isValueValid('');
    expect(isValid).toBeTruthy();
  });

  it('NOT A VALIDATOR: it should throw an error if the validator does not exist', () => {
    const fakeValidatorKey = 'boop';
    const errorString = `VALIDATION ERROR: ${fakeValidatorKey} is not a validator`;
    const errorThrowingValidator = () => { isValueValid('test-string', [fakeValidatorKey]); };

    expect(errorThrowingValidator).toThrowError(errorString);
  });

  describe('Single Validator:', () => {
    it('REQUIRED: the string length should be greater than 0', () => {
      const valid = isValueValid('beep', ['required']);
      const invalid = isValueValid('', ['required']);

      expect(valid).toBeTruthy();
      expect(invalid).toBeFalsy();
    });

    it('CUSTOM VALIDATOR: Should be able to take a custom validator function', () => {
      const colors: { [key: string]: string } = {
        red: '#FF0000',
        blue: '#0000FF',
        green: '#008000',
        yellow: '#FFFF00',
      };
      const customValidator: Validator = value => Boolean(colors[value]);
      const valid = isValueValid('red', [customValidator]);
      const invalid = isValueValid('Chartreuse', [customValidator]);

      expect(valid).toBeTruthy();
      expect(invalid).toBeFalsy();
    });
  });

  describe('multiple validators:', () => {
    it('FAILED VALIDATOR: If a validator fails it should return false', () => {
      const invalid = isValueValid('this-is-a-very-long-string', [
        value => value.length >= 5, // string length should be greater than or equal to 5
        value => value.length <= 10, // string length should be less than or equal to 10
      ]);

      expect(invalid).toBeFalsy();
    });

    it('SUCCESSFUL VALIDATORS: If all validators succeed it should return true', () => {
      const valid = isValueValid('this-is-a-very-long-string', [
        value => value.length >= 5, // string length should be greater than or equal to 5
        value => value.length <= 30, // string length should be less than or equal to 30
      ]);

      expect(valid).toBeTruthy();
    });
  });
});
