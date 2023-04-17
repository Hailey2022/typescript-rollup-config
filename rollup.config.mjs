import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-minification";

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.min.js',
    format: 'umd',
    name: 'myFunc',
  },
  plugins: [
    typescript(),
    terser(),
  ],
};
