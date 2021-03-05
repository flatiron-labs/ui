import React from 'react'
import { Story, Meta } from '@storybook/react'
import { PageHeading, PageHeadingProps } from '.'

export default {
  title: 'Content/PageHeading',
  component: PageHeading
} as Meta

const Template: Story = (args: PageHeadingProps) => <PageHeading {...args} />

export const Default = Template.bind({})
Default.args = {
  header: 'Welcome Back John Smith',
  subheader: 'Software Engineering',
  secondarySubheader: ' Fall 2021'
}
