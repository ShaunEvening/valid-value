import { required } from './required';

describe('VALIDATOR: required', () => {
  it('VALID: it should return true when the string length is great than 0', () => {
    const isValid = required('test');
    expect(isValid).toBeTruthy();
  });

  it('NOT VALID: it should return false when the string length is 0', () => {
    const isNotValid = required('');
    expect(isNotValid).toBeFalsy();
  });
});
