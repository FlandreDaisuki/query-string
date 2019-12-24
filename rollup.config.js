import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    format: 'umd',
    exports: 'named',
    file: 'dist/queryString.js',
    name: 'queryString',
  },
  plugins: [resolve(), commonjs()]
};