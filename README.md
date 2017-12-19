# poi-preset-uglifyjs

Replace minifying with UglifyJS v3

## Install

```bash
npm i -D poi-preset-uglifyjs
yarn add poi-preset-uglifyjs --dev
```

## Usage

Activate it in config file `poi.config.js`:

```js
module.exports = {
  presets: [require('poi-preset-uglifyjs')(pluginOptions)],
}
```

## License

MIT &copy; [edus44](https://github.com/edus44)
