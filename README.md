# avuxi-loader

**avuxi-loader** helps to load and initialize [avuxi](http://avuxi.com) library.

[![npm](https://img.shields.io/npm/v/avuxi-loader.svg?style=flat-square)](https://www.npmjs.com/package/avuxi-loader)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)
[![Developed at Wimdu](https://img.shields.io/badge/developed%20at-Wimdu-orange.svg?style=flat-square)](http://tech.wimdu.com/)

## Install

```sh
npm install --save avuxi-loader
```

## Usage

```js
import avuxi from 'avuxi-loader'

onGoogleApiLoaded (googleMapInstance) {
  avuxi('AVUXI_USER_ID', googleMapInstance)
}
```

## API
### `avuxi(apiKey, googleMap, options=DEFAULT_OPTIONS)`

#### Arguments

  - `apiKey` (*String*): API key from avuxi dashboard
  - `googleMap` (*Object*): Instance of `google.maps.Map`
  - `options` (*Object*): Extra options for loading avuxi script

  ```js
  DEFAULT_OPTIONS = {
    availableLocales: ['en', 'de'],
    callback: 'avapilLoaded',
    locale: 'en',
    scriptId: 'vxscript',
    type: 'sights', // one from ['sights', 'eating', 'shopping', 'partying']
    url: 'https://m.avuxiapis.com/av'
  }
  ```

## Run example locally

  1. Create a file `./example/config.local.js` with your API keys

  ```js
  export const AVUXI_USER_ID = 'your-id-from-avuxi-dashboard'
  export const GOOGLE_API_KEY = 'your-api-key-from-google-dashboard'
  ```

  2. Run the webpack dev server
  ```sh
  npm run example
  # ➡ http://localhost:8080/example
  ```

## License

MIT © [Alexander Gudulin](http://gudulin.com)
