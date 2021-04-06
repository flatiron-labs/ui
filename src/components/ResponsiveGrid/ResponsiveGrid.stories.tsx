import React from 'react'
import { Story, Meta } from '@storybook/react'

import { styled } from '~/styles/stitches.config'
import { ResponsiveGrid } from '~/components/ResponsiveGrid'

const Box = styled('div', {
  backgroundColor: '$pink500',
  height: '100px',
  width: '100%'
})

Box.displayName = 'RedBox'

export default {
  title: 'Layout/ResponsiveGrid',
  component: ResponsiveGrid
} as Meta

const Template: Story = ({ ...args }: GetComponentProps<typeof ResponsiveGrid>) => (
  <ResponsiveGrid {...args}>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </ResponsiveGrid>
)

export const Default = Template.bind({})
Default.args = {
  gap: '$8'
}

export const MinWidth = Template.bind({})
MinWidth.args = {
  min: '200px',
  gap: '$8'
}

export const MinMaxWidth = Template.bind({})
MinMaxWidth.args = {
  min: '100px',
  max: '200px',
  gap: '$8'
}

export const Gap = Template.bind({})
Gap.args = {
  min: '200px',
  gap: '$12'
}
