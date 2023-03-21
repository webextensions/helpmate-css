import fs from 'node:fs';
import path, { dirname } from 'node:path';

import assert from 'node:assert';

import { cssToScss } from '../../src/transform/cssToScss.js';

const moduleDir = dirname(import.meta.url).replace('file://', '');

const testCssToScss = function () {
    // Just a block
    {
        const cssInput = fs.readFileSync(path.resolve(moduleDir, './1-input.css'), 'utf8');
        const scssContent = cssToScss(cssInput);
        const scssExpectedOutput = fs.readFileSync(path.resolve(moduleDir, './1-output.scss'), 'utf8');
        assert.equal(scssContent.trim(), scssExpectedOutput.trim());
    }

    // Just a block
    {
        const cssInput = fs.readFileSync(path.resolve(moduleDir, './2-input.css'), 'utf8');
        const scssContent = cssToScss(cssInput);
        const scssExpectedOutput = fs.readFileSync(path.resolve(moduleDir, './2-output.scss'), 'utf8');
        assert.equal(scssContent.trim(), scssExpectedOutput.trim());
    }
};

export { testCssToScss };
