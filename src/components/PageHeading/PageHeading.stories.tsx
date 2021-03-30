import React from 'react'
import { Story, Meta } from '@storybook/react'
import { PageHeading } from '~/components/PageHeading'

export default {
  title: 'Content/PageHeading',
  component: PageHeading
} as Meta

const Template: Story = (args: GetComponentProps<typeof PageHeading>) => <PageHeading {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Welcome Back John Smith',
  subtitle: 'Software Engineering',
  secondarySubtitle: ' Fall 2021'
}

export const WithoutSubtitle = Template.bind({})
WithoutSubtitle.args = {
  title: 'Welcome Back John Smith'
}

export const WithHighlightedSubtitle = Template.bind({})
WithHighlightedSubtitle.args = {
  title: 'Welcome Back John Smith',
  subtitle: 'Software Engineering'
}

export const WithGenericSubtitle = Template.bind({})
WithGenericSubtitle.args = {
  title: 'Welcome Back John Smith',
  secondarySubtitle: ' Fall 2021'
}
