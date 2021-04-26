import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ProgressBar } from '~/components/ProgressBar'
import { ResponsiveGrid } from '~/components/ResponsiveGrid'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar
} as Meta

type Args = React.ComponentPropsWithoutRef<typeof ProgressBar>

const Template: Story = (args: Args) => <ProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 50,
  max: 100,
  label: 'default'
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  ...Default.args,
  progressColor: 'yellow',
  label: 'color'
}

export const Multiple: Story = () => (
  <ResponsiveGrid>
    <ProgressBar max={100} value={75} progressColor="purple" label="purple" />
    <ProgressBar max={100} value={25} progressColor="cyan" label="cyan" />
  </ResponsiveGrid>
)
