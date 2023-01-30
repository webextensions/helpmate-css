import { csspretty } from '../3rdparty_customized/csspretty_customized.js';

const minifyCss = function (cssCode = '') {
    if (cssCode.trim() === '') {
        return '';
    }

    const output = csspretty({
        mode: 'minify',
        source: cssCode
    });
    // Alternatively, use Yahoo's CSS Min library:
    //     const output = YAHOO.compressor.cssmin(cssCode);

    return output;
};

export { minifyCss };
