import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
  input: 'src/index.js',
  external: ['vue'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    vue({ css: false }),
  ],
  output: [
    {
      file: 'dist/vue-role-text.cjs.js',
      format: 'cjs',
      exports: 'default',
    },
    {
      file: 'dist/vue-role-text.esm.js',
      format: 'esm',
    },
  ],
}
