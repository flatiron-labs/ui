import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Toggle, ToggleProps } from '.'

export default {
  title: 'Inputs/Toggle',
  component: Toggle
} as Meta

const Template: Story = (args: ToggleProps) => <Toggle {...args} />

export const ToggleOnly = Template.bind({})

export const ToggleWithLabel = Template.bind({})
ToggleWithLabel.args = {
  label: 'Try student home feature'
}
