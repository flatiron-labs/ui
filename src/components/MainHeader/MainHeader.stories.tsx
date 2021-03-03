import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MainHeader, MainHeaderProps } from '.'

export default {
  title: 'Content/MainHeader',
  component: MainHeader
} as Meta

const Template: Story = (args: MainHeaderProps) => <MainHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  header: 'Welcome Back John Smith',
  subheader: 'Software Engineering',
  date: ' Fall 2021'
}
