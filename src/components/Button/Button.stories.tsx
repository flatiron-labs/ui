import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    appearance: {
      description: 'Adjust button appearance',
      defaultValue: 'secondary',
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
        default: 'secondary'
      }
    },
    size: {
      description: 'Adjust button size',
      defaultValue: 'small',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
        default: 'small'
      }
    }
  }
} as Meta

const Template: Story = args => <Button {...args}>Button</Button>

export const Default = Template.bind({})
Default.args = {
  onClick: () => action('clicked')
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  onClick: () => action('clicked')
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  onClick: () => action('clicked')
}

export const Primary = Template.bind({})
Primary.args = {
  appearance: 'primary',
  onClick: () => action('clicked')
}

export const AsLink = Template.bind({})
AsLink.args = {
  as: 'a',
  href: 'https://google.com'
}

export const Disabled = Template.bind({})
Disabled.args = {
  appearance: 'disabled'
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  width: 'full'
}
