import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Avatar } from '~/components/Avatar'

export default {
  title: 'Global/Avatar',
  component: Avatar,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story = (args: GetComponentProps<typeof Avatar>) => <Avatar {...args}>JS</Avatar>

export const Default = Template.bind({})
