# helpmate-css
A collection of various CSS related helper functions for Browser and Node.js

## How to use

With `import` syntax:
```js
import {
    beautifyCss,
    cssToScss,
    minifyCss
} from 'helpmate-css';
```

With `require` syntax:
```js
const {
    beautifyCss,
    cssToScss,
    minifyCss
} = require('helpmate-css');
```
## Example Usages

```js
import {
    beautifyCss,
    cssToScss,
    minifyCss
} from 'helpmate-css';

const cssCode = (`
    html {
        background-color: #e0e0e0;
    }
    html h1 {
        font-size: 24px;
    }
`);

const minifiedCss = minifyCss(cssCode);
console.log(minifiedCss);

const beautifiedCss = beautifyCss(minifiedCss);
console.log(beautifiedCss);

const scssCode = cssToScss(cssCode);
console.log(scssCode);
```

## TODO

* Generate separate bundles for each utility

## Credits

* https://github.com/Firebrand/css-to-scss
