import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ContentCard, ContentCardProps } from '.'

export default {
  title: 'Content/ContentCard',
  component: ContentCard
} as Meta

const Template: Story = (args: ContentCardProps) => <ContentCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Full Name:',
  value: 'Johnathan Smith'
}
