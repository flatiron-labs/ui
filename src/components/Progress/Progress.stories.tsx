import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Progress, ProgressProps } from '.'
import { flatironTheme } from '~/styles'

export default {
  title: 'Data/Progress',
  component: Progress,
  argTypes: {
    activeColor: {
      defaultValue: flatironTheme.colors.common.pink,
      description: 'Adjust color of complete progress',
      control: 'color'
    },
    total: {
      description: 'Adjust total number',
      control: 'number'
    },
    complete: {
      description: 'Adjust complete number',
      control: 'number'
    }
  }
} as Meta

const Template: Story = (args: ProgressProps) => <Progress {...args} />

export const Default = Template.bind({})
Default.args = {
  activeColor: flatironTheme.colors.common.pink,
  total: 40,
  complete: 10
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  activeColor: flatironTheme.colors.common.blue,
  total: 40,
  complete: 10,
  label: 'Number of tasks complete'
}
