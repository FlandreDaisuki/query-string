import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [{
  input: 'index.js',
  output: {
    format: 'umd',
    exports: 'named',
    file: 'dist/queryString.umd.js',
    name: 'queryString',
  },
  plugins: [resolve(), commonjs()]
}, {
  input: 'index.js',
  output: {
    format: 'es',
    exports: 'named',
    file: 'dist/queryString.js',
    name: 'queryString',
  },
  plugins: [resolve(), commonjs()]
}, {
  input: 'index.js',
  output: {
    format: 'cjs',
   	exports: 'named',
    file: 'dist/queryString.cjs.js',
	name: 'queryString',
  },
   plugins: [resolve(), commonjs()]
}, {
  input: 'index.js',
  output: {
    format: 'amd',
    exports: 'named',
    file: 'dist/queryString.amd.js',
    name: 'queryString',
  },
   plugins: [resolve(), commonjs()]
}];
