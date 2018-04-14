import { maximumLength } from './maximum-length';

describe('minimumLength(minimumLength)', () => {
  describe('VALIDATOR', () => {
    const validator = maximumLength(10);

    it('Validator should return true when value length is equal to maximum length', () => {
      const isValid = validator('tests pass');
      expect(isValid).toBeTruthy();
    });

    it('Validator should return true when value length is less than maximum length', () => {
      const isValid = validator('PASS');
      expect(isValid).toBeTruthy();
    });

    it('Validator should return false when value length is less than minimum length', () => {
      const isNotValid = validator('YOU SHALL NOT PASS');
      expect(isNotValid).toBeFalsy();
    });
  });
});
