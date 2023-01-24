import { testCssToScss } from './testCssToScss/testCssToScss.js';

describe('Utils', function () {
    describe('#CssToScss', function () {
        it('should be able to convert from CSS to SCSS', function () {
            testCssToScss();
        });
    });
});
