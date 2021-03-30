import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TextCard } from '~/components/TextCard'

export default {
  title: 'Content/TextCard',
  component: TextCard
} as Meta

const Template: Story = (args: GetComponentProps<typeof TextCard>) => <TextCard {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Full Name',
  value: 'Johnathan Smith'
}
