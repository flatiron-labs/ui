import React from 'react'
import { Story, Meta } from '@storybook/react'
import { LinkCard, LinkCardProps } from '.'

export default {
  title: 'Content/LinkCard',
  component: LinkCard
} as Meta

const Template: Story = (args: LinkCardProps) => (
  <div style={{ paddingTop: '40px' }}>
    <LinkCard {...args} />
  </div>
)

export const Pink = Template.bind({})
Pink.args = {
  title: 'Try free courses',
  cta: 'View Canvas',
  backgroundStyle: 'red',
  onClick: () => null
}

export const Purple = Template.bind({})
Purple.args = {
  title: 'Try free courses',
  cta: 'View Pathwright',
  backgroundStyle: 'purple',
  onClick: () => null
}

export const Yellow = Template.bind({})
Yellow.args = {
  title: 'Try free courses',
  cta: 'View Pathwright',
  backgroundStyle: 'yellow',
  onClick: () => null
}

export const Blue = Template.bind({})
Blue.args = {
  title: 'Try free courses',
  cta: 'View Canvas',
  backgroundStyle: 'turq',
  onClick: () => null
}
