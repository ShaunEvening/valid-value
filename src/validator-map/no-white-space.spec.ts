import { noWhiteSpace } from './no-white-space';

describe('VALIDATOR: noWhiteSpace', () => {
  it('VALID: it should return true when the string has no spaces', () => {
    const isValid = noWhiteSpace('test-this-string');
    expect(isValid).toBeTruthy();
  });

  it('NOT VALID: it should return false when the string includes spaces', () => {
    const isNotValid = noWhiteSpace('test this string');
    expect(isNotValid).toBeFalsy();
  });

  it('NOT VALID: it should return false when the string includes a tab', () => {
    const isNotValid = noWhiteSpace(`\ttabbed string`);
    expect(isNotValid).toBeFalsy();
  });

  it('NOT VALID: it should return false when the string includes a newline', () => {
    const isNotValid = noWhiteSpace(`you\nshall\nnot\npass`);
    expect(isNotValid).toBeFalsy();
  });
});
