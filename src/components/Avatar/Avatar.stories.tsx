import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta

export const TextOnly: Story = () => (
  <Avatar>
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
)

export const WithImage: Story = () => (
  <Avatar>
    <AvatarImage src="https://picsum.photos/id/1005/400/400" alt="John Doe's avatar" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
)
