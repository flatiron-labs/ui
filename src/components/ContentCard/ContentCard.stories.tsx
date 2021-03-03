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
  type: 'Resume',
  cta: 'Upload',
  secondaryTitle: 'Assigned',
  secondaryDescription: '1/2/2022',
  tertiaryTitle: 'Completed',
  tertiaryDescription: '1/3/2023',
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
  secondaryTitle: 'Assigned',
  secondaryDescription: '1/2/2233',
  onClick: () => null
}
