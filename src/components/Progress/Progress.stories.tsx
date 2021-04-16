import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Progress, ProgressProps } from '.'
import { flatironTheme } from '~/styles'
import { Grid } from '~/index'

export default {
  title: 'Data/Progress',
  component: Progress,
  argTypes: {
    color: {
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

const Template: Story = (args: ProgressProps) => (
  <Grid item md={6}>
    <Progress {...args} />
  </Grid>
)

export const Default = Template.bind({})
Default.args = {
  color: flatironTheme.colors.common.pink,
  total: 40,
  complete: 10
}
