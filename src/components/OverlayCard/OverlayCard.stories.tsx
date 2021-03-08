import React from 'react'
import { Story, Meta } from '@storybook/react'
import { OverlayCard, OverlayCardProps } from '.'

import PinkOverlay from '~/assets/images/overlay-pink.svg'
import PurpleOverlay from '~/assets/images/overlay-purple.svg'
import TurqOverlay from '~/assets/images/overlay-turq.svg'
import YellowOverlay from '~/assets/images/overlay-yellow.svg'

export default {
  title: 'Content/OverlayCard',
  component: OverlayCard,
  argTypes: {
    accent: {
      control: {
        type: 'select',
        options: ['turq', 'pink', 'yellow', 'purple']
      }
    },
    image: {
      control: {
        type: 'select',
        options: [PinkOverlay, PurpleOverlay, TurqOverlay, YellowOverlay]
      }
    }
  }
} as Meta

const Template: Story = (args: OverlayCardProps) => <OverlayCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Try free courses',
  cta: 'View Canvas',
  accent: 'pink',
  image: PinkOverlay,
  onClick: () => null
}
