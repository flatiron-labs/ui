import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Toggle } from '~/components/Toggle'

export default {
  title: 'Inputs/Toggle',
  component: Toggle
} as Meta

const Template: Story = (args: GetComponentProps<typeof Toggle>) => <Toggle {...args} />

export const Default = Template.bind({})

export const ToggleWithLabel = Template.bind({})
ToggleWithLabel.args = {
  label: 'Try student home feature'
}
