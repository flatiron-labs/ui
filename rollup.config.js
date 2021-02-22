import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'

import pkg from './package.json'

export default {
  perf: false,
  input: pkg.source,
  output: [
    {
      dir: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      dir: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true,
      rollupCommonJSResolveHack: true
      // exclude: ['**/*.test.ts', '**/*.stories.ts', '**/*.test.tsx', '**/*.stories.tsx']
    }),
    image(),
    terser(),
    analyze({ summaryOnly: true })
  ]
}
