import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Typography/Heading',
  component: Heading
} as Meta

const Template: Story = (args: HeadingProps) => <Heading {...args}>Header</Heading>

export const Heading1 = Template.bind({})
Heading1.args = {
  h1: true
}

export const Heading2 = Template.bind({})
Heading2.args = {
  h2: true
}

export const Heading3 = Template.bind({})
Heading3.args = {
  h3: true
}
