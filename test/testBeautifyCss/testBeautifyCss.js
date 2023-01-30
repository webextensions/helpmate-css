import assert from 'node:assert';

import { beautifyCss } from '../../src/beautifyCss/beautifyCss.js';

const testBeautifyCss = function () {
    // Just a block
    {
        const cssInput = (`html    a { color:            red;font-size:10px }        `);
        const formattedCssOutput = beautifyCss(cssInput);
        const expectedOutput = (
// eslint-disable-next-line indent
`html a {
    color: red;
    font-size: 10px;
}
`
        );
        assert.equal(formattedCssOutput.trim(), expectedOutput.trim());
    }

    // Just a block
    {
        const cssInput = ('');
        const formattedCssOutput = beautifyCss(cssInput);
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
        const formattedCssOutput = beautifyCss(cssInput);
        const expectedOutput = ('');
        assert.equal(formattedCssOutput.trim(), expectedOutput.trim());
    }
};

export { testBeautifyCss };
