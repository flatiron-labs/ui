import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Page } from '.'

export default {
  title: 'Composites/Page'
} as Meta

const Template: Story = () => (
  <Page style={{ minHeight: '100vh' }}>
    <p>content</p>
  </Page>
)

export const Default = Template.bind({})
