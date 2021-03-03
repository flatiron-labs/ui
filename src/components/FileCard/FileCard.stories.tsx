import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FileCard, FileCardProps } from '.'
import { Color } from '~/styles'

export default {
  title: 'Content/FileCard',
  component: FileCard
} as Meta

const Template: Story = (args: FileCardProps) => (
  <div style={{ paddingTop: '40px' }}>
    <FileCard {...args} />
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

export const CtaWithJsx = Template.bind({})
CtaWithJsx.args = {
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
