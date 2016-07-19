module.exports = {
  "env": {
    "jasmine": true,
    "jest": true
  },
  "plugins": ["jasmine"],
  "rules": {
    "jasmine/named-spy": ["off"],
    "jasmine/no-focused-tests": ["error"],
    "jasmine/no-disabled-tests": ["off"],
    "jasmine/no-suite-dupes": ["error", "block"],
    "jasmine/no-spec-dupes": ["error", "block"],
    "jasmine/missing-expect": ["error"],
    "jasmine/no-suite-callback-args": ["error"],
    "jasmine/valid-expect": ["error"],
    "jasmine/no-assign-spyon": ["off"]
  }
};
