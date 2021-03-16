import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TextCard, TextCardProps } from '.'

export default {
  title: 'Content/TextCard',
  component: TextCard
} as Meta

const Template: Story = (args: TextCardProps) => <TextCard {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Full Name',
  value: 'Johnathan Smith'
}
