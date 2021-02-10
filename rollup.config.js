import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'

import packageJson from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: ['styled-components'],
  plugins: [
    image(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
    analyze({ summaryOnly: true, showExports: true })
  ]
}
