import { testCssToScss } from './testCssToScss/testCssToScss.js';
import { testBeautifyCss } from './testBeautifyCss/testBeautifyCss.js';

describe('Utils', function () {
    describe('#CssToScss', function () {
        it('should be able to convert from CSS to SCSS', function () {
            testCssToScss();
        });
    });

    describe('#beautifyCss', function () {
        it('should be able to beautify CSS', function () {
            testBeautifyCss();
        });
    });
});
