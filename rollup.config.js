import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import autoExternal from 'rollup-plugin-auto-external'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'

import pkg from './package.json'

export default {
  perf: false,
  input: 'src/index.ts',
  output: [
    {
      dir: 'build/lib',
      format: 'cjs',
      sourcemap: false
    },
    {
      dir: 'build/es',
      format: 'esm',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: 'src'
    }
  ],
  external: Object.keys(pkg.peerDependencies || {}),
  plugins: [
    autoExternal(),
    image(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    typescript({
      clean: true,
      rollupCommonJSResolveHack: true,
      exclude: ['**/*.test.ts', '**/*.stories.ts', '**/*.test.d.ts', '**/*.stories.d.ts']
    }),
    commonjs(),
    terser(),
    analyze({ summaryOnly: true })
  ]
}
