# helpmate-css

A collection of various CSS related helper functions for Browser and Node.js

## How to use

With `import` syntax:
```js
import { beautifyCss } from 'helpmate-css/dist/format/beautifyCss.js';
import { minifyCss } from 'helpmate-css/dist/format/minifyCss.js';
import { cssToScss } from 'helpmate-css/dist/transform/cssToScss.js';
```

With `require` syntax:
```js
const { beautifyCss } = require('helpmate-css/dist/format/beautifyCss.js');
const { minifyCss } = require('helpmate-css/dist/format/minifyCss.js');
const { cssToScss } = require('helpmate-css/dist/transform/cssToScss.js');
```

## Example Usages

```js
import { minifyCss } from 'helpmate-css/dist/format/minifyCss.js';
import { beautifyCss } from 'helpmate-css/dist/format/beautifyCss.js';
import { cssToScss } from 'helpmate-css/dist/transform/cssToScss.js';

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

## List of available `import` / `require`

```js
// Load with "import" syntax:

import { beautifyCss } from 'helpmate-css/dist/format/beautifyCss.js';
import { csspretty } from 'helpmate-css/dist/format/csspretty.js';
import { minifyCss } from 'helpmate-css/dist/format/minifyCss.js';
import { format } from 'helpmate-css/dist/format/index.js';

import { cssToScss } from 'helpmate-css/dist/transform/cssToScss.js';
import { transform } from 'helpmate-css/dist/transform/index.js';

import { helpmateCss } from 'helpmate-css/dist/index.js';
import { helpmateCss } from 'helpmate-css';


// Load with "require" syntax:

const { beautifyCss } = require('helpmate-css/dist/format/beautifyCss.cjs');
const { csspretty } = require('helpmate-css/dist/format/csspretty.cjs');
const { minifyCss } = require('helpmate-css/dist/format/minifyCss.cjs');
const { format } = require('helpmate-css/dist/format/index.cjs');

const { cssToScss } = require('helpmate-css/dist/transform/cssToScss.cjs');
const { transform } = require('helpmate-css/dist/transform/index.cjs');

const { helpmateCss } = require('helpmate-css/dist/index.cjs');
const { helpmateCss } = require('helpmate-css');
```

## List of files

```
src/format/beautifyCss.js
src/format/csspretty.js
src/format/minifyCss.js
src/format/index.js

src/transform/cssToScss.js
src/transform/index.js

src/index.js
```

## Credits

* [Firebrand/css-to-scss](https://github.com/Firebrand/css-to-scss)

## Connect with us

* https://webextensions.org/
* [GitHub](https://github.com/webextensions/live-css-editor)
* [Twitter](https://twitter.com/webextensions)
