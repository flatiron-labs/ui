import React from 'react'
import { Story, Meta } from '@storybook/react'

import { FacebookLogo } from 'phosphor-react'

export default {
  title: 'Components/Icon',
  argTypes: {
    color: {
      control: {
        type: 'color'
      }
    }
  }
} as Meta

type Args = {
  color?: string
}

const Template: Story = ({ color }: Args) => (
  <div data-cy="icon-container" style={{ color }}>
    <FacebookLogo width="100" height="100" />
  </div>
)

export const Default = Template.bind({})
