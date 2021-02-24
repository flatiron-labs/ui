import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ContentCard, ContentCardProps } from '.'
import { Color } from '~/styles'

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
  secondaryTitle: 'Assigned',
  secondaryDescription: '1/2/2233',
  onClick: () => null
}

export const CtsWithJsx = Template.bind({})
CtsWithJsx.args = {
  title: 'Resume',
  description: 'title_of_resume.pdf',
  cta: (
    <a href="#" style={{ width: '100%', color: Color.turq, textAlign: 'center' }}>
      LINK
    </a>
  ),
  legend: 'Completed: 1/1/1992',
  secondaryTitle: 'Assigned',
  secondaryDescription: '1/2/2233',
  onClick: () => null
}
