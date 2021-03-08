const path = require('path')

function resolve(input) {
  return path.resolve(__dirname, input)
}

module.exports = {
  stories: [
    '../docs/Introduction.stories.mdx',
    '../docs/*.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: resolve('../tsconfig.json')
        },
        include: [resolve('../src')]
      }
    },
    '@etchteam/storybook-addon-status',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-addon-jsx'
  ],
  webpackFinal: async config => {
    config.resolve.alias['~'] = resolve('../src/')
    config.resolve.extensions.push('.ts', '.tsx')

    return config
  }
}
