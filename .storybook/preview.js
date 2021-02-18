import React from 'react'
import { Layout } from '~/components'
import { Container, StyleBaseline } from '~/components'
import { ThemeProvider } from '@material-ui/core/styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen'
}

export const decorators = [
  Story => (
    <Layout>
      <Story />
    </Layout>
  )
]
