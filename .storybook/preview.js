import React from 'react'
import { Container } from '~/components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  docs: {
    page: null
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true
    }
  }
}

export const decorators = [
  Story => (
    <Container>
      <Story />
    </Container>
  )
]

const { addDecorator } = require('@storybook/react')
const { jsxDecorator } = require('storybook-addon-jsx')

addDecorator(jsxDecorator)
