describe('simple tests', () => {
  // Test a rule from the Algolia config
  // eslint-disable-next-line jest/consistent-test-it
  test('should do simple maths', () => {
    expect(Math.pow(2, 8)).toBe(256);
  });

  // Test a rule from the recommended config (https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md)
  // eslint-disable-next-line jest/no-commented-out-tests
  // it('foo', () => {});

  it('should do simple comparison', () => {
    // Test a rule from the style config (https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md)
    // eslint-disable-next-line jest/prefer-to-be
    expect(0).toEqual(0);
  });
});
