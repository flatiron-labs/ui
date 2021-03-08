/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

let moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' })
moduleNameMapper['\\.(css|less|scss|sass)$'] = 'identity-obj-proxy'
moduleNameMapper['\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'] =
  '<rootDir>/mocks/fileMock.js'

module.exports = {
  roots: ['<rootDir>/src'],
  injectGlobals: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper,
  preset: 'ts-jest/presets/js-with-ts',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/*.test.(ts|tsx)'],
  transform: {
    '^.+\\.svg$': '<rootDir>/src/test/svgTransform.js'
  }
}
