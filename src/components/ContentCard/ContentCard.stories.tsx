import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ContentCard, ContentCardProps } from '.'

export default {
  title: 'Content/ContentCard',
  component: ContentCard
} as Meta

const Template: Story = (args: ContentCardProps) => (
  <div style={{ paddingTop: '40px' }}>
    <ContentCard {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Resume',
  description: 'title_of_resume.pdf',
  cta: 'Upload',
  legend: 'Completed: 1/1/1992',
  middleTitle: 'Assigned',
  middleDescription: '1/2/2233',
  onClick: () => null
}
