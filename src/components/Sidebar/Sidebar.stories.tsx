import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Sidebar } from '.'

export default {
  title: 'Components/Sidebar',
  component: Sidebar
} as Meta

type Args = GetComponentProps<typeof Sidebar>

const Template: Story = (args: Args) => (
  <Sidebar {...args} css={{ backgroundColor: 'darkblue' }}>
    <p>I am the sidebar, hear me roar!</p>
  </Sidebar>
)

export const Default = Template.bind({})
Default.args = {
  expanded: true
}
