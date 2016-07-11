# eslint-config-algolia

This is [Algolia](https://www.algolia.com/)'s [ESLint](http://eslint.org/) configuration.

## Usage

```sh
npm install eslint-config-algolia --save-dev
```

create an `.eslintrc.js` file:
```js
module.exports = {
  "extends": ["algolia"]
};
```

### Tips

If you are using [any editors plugin](http://eslint.org/docs/user-guide/integrations.html#editors) for ESLint then it will show you warnings/errors.

Now you can create an npm `lint` [script](https://docs.npmjs.com/files/package.json#scripts) that will run `eslint "**/*.js"` to lint all files.

## Ignoring files

See "Ignoring Files and Directories" on [ESLint website](http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories).

## Using as a global eslint config

You can have a `~/.eslintrc.js` config that will be used if your project has no `.eslintrc.js`.

Create a `~/.eslintrc.js` with:

```json
{
  "extends": "algolia"
}
```

Then:

```sh
cd ~
npm install eslint-config-algolia
```
