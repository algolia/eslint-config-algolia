# eslint-config-algolia

This is [Algolia](https://www.algolia.com/)'s [ESLint](http://eslint.org/) configuration for es5 and es6.

We [extend](http://eslint.org/docs/user-guide/configuring.html#extending-configuration-files) [airbnb/javascript](https://github.com/airbnb/javascript) rules.

## Usage

```sh
npm install eslint eslint-config-algolia eslint-plugin-algolia eslint-config-airbnb eslint-plugin-react babel-eslint --save-dev
```

create an `.eslintrc` file:
```json
{
  "extends": "algolia"
}
```

### Tips

If you are using [any editors plugin](http://eslint.org/docs/user-guide/integrations.html#editors) for ESLint then it will show you warnings/errors.

Now you can create an npm `lint` [script](https://docs.npmjs.com/files/package.json#scripts) that will run `eslint .` to lint all files or `eslint . --quiet` to hide warnings.

## Rules

The rules are the ones from the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-) with [modifications](./index.js):

- disallow [space-in-brackets](http://eslint.org/docs/rules/space-in-brackets) ~~`var arr = [ 1 ]`~~
- disallow [space-in-parens](http://eslint.org/docs/rules/space-in-parens) ~~`if ( true ) { }`~~
- disable [vars-on-top](http://eslint.org/docs/rules/vars-on-top)
- disable [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign) `function(param) { param = param }`
- warn on long lines [max-len](http://eslint.org/docs/rules/max-len)
- enable [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define) for functions
- prefer function declarations [func-style](http://eslint.org/docs/rules/)

## Ignoring files

See "Ignoring Files and Directories" on [ESLint website](http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories).

## Using as a global eslint config

You can have a `~/.eslintrc` config that will be used if your project has no `.eslintrc`.

Create a `~/.eslintrc` with:

```json
{
  "extends": "algolia"
}
```

Then:

```sh
cd ~
npm install eslint eslint-config-algolia eslint-config-airbnb eslint-plugin-react
```

