# 4.2.0 (2015-10-26)

  Use [airbnb/javascripts/eslint-config-airbnb/rules/react](https://github.com/airbnb/javascript/blob/98a76908fcf605221e6b85849f0d058b886741bd/packages/eslint-config-airbnb/rules/react.js).

# 4.0.0 (2015-10-06)

  Easier usage instructions and linting:

  ```sh
  npm install eslint eslint-config-algolia eslint-config-airbnb --save-dev
  ```

  create an `.eslintrc` file:
  ```json
  {
    "extends": "algolia"
  }
  ```

  No more `algolia/es5` or `algolia/es6`, move to `es6` if you need to upgrade.

# 3.0.0 (2015-09-11)

  You can now lint es5 and es6 code by doing:

  ```json
  {
    "extends": [
      "eslint:recommended"
      "airbnb/base",
      "agolia/es5"
    ]
  }
  ```

  Or

  ```json
  {
    "extends": [
      "eslint:recommended"
      "airbnb",
      "algolia/es6"
    ]
  }
  ```

  See the [readme](README.md) for more details.

# 2.2.0 (2015-09-08)

Enable `quotes-props` to `as-needed` to disallow unecessary quotes (consistency).
http://eslint.org/docs/rules/quote-props.html#as-needed

### 2.1.2 (2015-07-31):

Disable enforcing comma dangle on multiline strings (forced by airbnb)

### 2.1.1 (2015-07-09):

Disable func-names warnings. They are useful is uncaught exceptions.
There's no point in enforcing func-names, since most browsers
will now show the property name in an uncaught exception.

### 2.1.0 (2015-07-08):

Consistency around spacing

### 2.0.4 (2015-07-03):

Semi colons are back

### 2.0.3 (2015-07-02):

"First" working release, 1.0.0 was doomed (cannot npm unpublish)
