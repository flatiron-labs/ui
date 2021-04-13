/* eslint-disable no-alert */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/Button',
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

const onClick = () => {
  alert('clicked')
  action('clicked')
}

export const Default = Template.bind({})
Default.args = {
  onClick
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  onClick
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  onClick
}

export const Primary = Template.bind({})
Primary.args = {
  appearance: 'primary',
  onClick
}

export const AsLink = Template.bind({})
AsLink.args = {
  as: 'a',
  href: '/AsLink-test'
}

export const Disabled = Template.bind({})
Disabled.args = {
  appearance: 'disabled'
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  width: 'full'
}
