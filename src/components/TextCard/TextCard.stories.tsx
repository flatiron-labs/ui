import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TextCard, TextCardContent, TextCardTitle } from '~/components/TextCard'

export default {
  title: 'Components/TextCard',
  component: TextCard
} as Meta

type Args = {
  title: string
  content: string
}
const Template: Story = ({ title, content }: Args) => (
  <TextCard>
    <TextCardTitle>{title}</TextCardTitle>
    <TextCardContent>{content}</TextCardContent>
  </TextCard>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Full Name',
  content: 'Johnathan Smith'
}
