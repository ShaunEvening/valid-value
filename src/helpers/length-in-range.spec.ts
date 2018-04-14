import { lengthInRange } from './length-in-range';

describe('lengthInRange(minimumLength, maximumLength)', () => {
  describe('VALIDATOR', () => {
    const validator = lengthInRange(5, 10);
    it('Validator should return true when string length is equal to the minimum length', () => {
      const isValid = validator('tests');
      expect(isValid).toBeTruthy();
    });

    it('Validator should return true when string length is equal to the maximum length', () => {
      const isValid = validator('tests pass');
      expect(isValid).toBeTruthy();
    });

    it('Validator should return true when string length is within range', () => {
      const isValid = validator('1234567');
      expect(isValid).toBeTruthy();
    });

    it('Validator should return false when string length is less than minimum length', () => {
      const isNotValid = validator('test');
      expect(isNotValid).toBeFalsy();
    });

    it('Validator should return false when string length is greater than maximum length', () => {
      const isNotValid = validator('you shall not pass');
      expect(isNotValid).toBeFalsy();
    });
  });
});
