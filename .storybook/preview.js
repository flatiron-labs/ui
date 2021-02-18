import React from 'react'
import { Layout } from '~/components'

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
