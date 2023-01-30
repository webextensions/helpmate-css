import assert from 'node:assert';

import { minifyCss } from '../../src/minifyCss/minifyCss.js';

const testMinifyCss = function () {
    // Just a block
    {
        const cssInput = (`html    a { color:            red;font-size:10px }        `);
        const formattedCssOutput = minifyCss(cssInput);
        const expectedOutput = (`html a{color:red;font-size:10px}`);
        assert.equal(formattedCssOutput.trim(), expectedOutput.trim());
    }

    // Just a block
    {
        const cssInput = ('');
        const formattedCssOutput = minifyCss(cssInput);
        const expectedOutput = ('');
        assert.equal(formattedCssOutput.trim(), expectedOutput.trim());
    }

    // Just a block
    {
        const cssInput = (
// eslint-disable-next-line indent
`
 
  
	
`
        );
        const formattedCssOutput = minifyCss(cssInput);
        const expectedOutput = ('');
        assert.equal(formattedCssOutput.trim(), expectedOutput.trim());
    }
};

export { testMinifyCss };
