import { minimumLength } from './minimum-length';

describe('minimumLength(minimumLength)', () => {
  describe('VALIDATOR', () => {
    const validator = minimumLength(5);

    it('Validator should return true when value length is equal to minimum length', () => {
      const isValid = validator('tests');
      expect(isValid).toBeTruthy();
    });

    it('Validator should return true when value length is greater than minimum length', () => {
      const isValid = validator('test should pass');
      expect(isValid).toBeTruthy();
    });

    it('Validator should return false when value length is less than minimum length', () => {
      const isNotValid = validator('FAIL');
      expect(isNotValid).toBeFalsy();
    });
  });
});
