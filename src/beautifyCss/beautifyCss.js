import { csspretty } from '../3rdparty_customized/csspretty_customized.js';

const beautifyCss = function (cssCode = '', options = {}) {
    if (cssCode.trim() === '') {
        return '';
    }
    const
        useTabs = options.useTabs,
        useSpaceCount = options.useSpaceCount;

    let
        inchar,
        insize;

    if (useTabs) {
        inchar = '\t';
        insize = 1;
    } else {
        inchar = ' ';
        insize = useSpaceCount || 4;
    }

    const firstPass = csspretty({
        mode: 'beautify',
        insize: insize,
        inchar: inchar,
        source: cssCode
    });

    /* Doing beautify twice, otherwise it doesn't beautify code like the following one in single go:
           .box-shadow(@style,@alpha: 50%) when (isnumber(@alpha)){.box-shadow(@style, rgba(0, 0, 0, @alpha))} */
    const secondPass = csspretty({
        mode: 'beautify',
        insize: insize,
        inchar: inchar,
        source: firstPass
    });

    return secondPass;

    // Alternatively, use cssbeautify library:
    //     return cssbeautify(
    //         cssCode,
    //         {
    //             indent: '    ',
    //             autosemicolon: true
    //         }
    //     );
};

export { beautifyCss };
