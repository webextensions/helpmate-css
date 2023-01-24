/* eslint-disable filenames/match-exported */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

const plugins = [
    resolve(),
    commonjs(),
    json(),
    terser({
        // Equivalent to:
        //     $ terser <source> --compress sequences=false --format semicolons=false --output <destination>

        compress: {
            sequences: false
        },
        mangle: false,
        format: {
            semicolons: false,
            comments: function (_, comment) {
                if (
                    comment.value.charAt(0) === '!' ||
                    /cc_on|copyright|license|preserve/i.test(comment.value)
                ) {
                    return true;
                } else {
                    return false;
                }

                // if (comment.type === 'comment2') { // multiline comment
                //     return /@preserve|@license|@cc_on/i.test(comment.value);
                // } else if (comment.type === 'comment1') { // single line comment
                //     if (comment.value.indexOf('!') === 0) {
                //         return true;
                //     } else {
                //         return /@preserve|@license|@cc_on/i.test(comment.value);
                //     }
                // } else {
                //     return false;
                // }
            }
        }
    })
];

const output = {
    exports: 'named',
    sourcemap: true
};

const rollupConfig = [
    {
        input: 'src/index.js',
        output: [
            { ...output, format: 'cjs', file: 'dist/index.cjs' },
            { ...output, format: 'esm', file: 'dist/index.js' }
        ],
        plugins
    }
];

export default rollupConfig; // eslint-disable-line import/no-default-export
