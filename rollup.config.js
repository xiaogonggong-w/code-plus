import resolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import autoprefixer from 'autoprefixer';
import commonjs from "@rollup/plugin-commonjs";
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm'
    },
    plugins: [
        resolve(),
        commonjs(),
        terser(),
        postcss({
            plugins: [
                autoprefixer()
            ]
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        serve({
            contentBase: '',  //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
            port: 8020   //端口号，默认10001
        }),
        livereload('dist')   //watch dist目录，当目录中的文件发生变化时，刷新页面
    ],
};