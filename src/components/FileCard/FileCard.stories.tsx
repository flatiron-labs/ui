import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FileCard } from '.'

export default {
  title: 'Content/FileCard',
  component: FileCard
} as Meta

const Template: Story = (args: GetComponentProps<typeof FileCard>) => <FileCard {...args} />

export const Default = Template.bind({})
Default.args = {
  cta: 'Upload',
  onClick: () => null,
  secondary: {
    title: 'Assigned',
    description: '1/2/2022'
  },
  tertiary: {
    title: 'Completed',
    description: '1/3/2023'
  },
  type: 'Resume'
}
