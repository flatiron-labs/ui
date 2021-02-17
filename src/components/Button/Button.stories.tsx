import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '..'

export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'sm',
      description: 'Adjust size  sm | md | lg',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg']
      }
    },
    primary: {
      defaultValue: false,
      description: 'Adjust button type',
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta

const Template: Story = (args: ButtonProps) => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  onClick: () => action('button clicked')
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  onClick: () => action('button clicked')
}
