import React from 'react'
import { Story, Meta } from '@storybook/react'
import { OverlayCard } from '.'
import { ResponsiveGrid } from '~/components/ResponsiveGrid'

import PinkOverlay from '~/assets/images/overlay-pink.svg'
import PurpleOverlay from '~/assets/images/overlay-purple.svg'
import TurqOverlay from '~/assets/images/overlay-turq.svg'
import YellowOverlay from '~/assets/images/overlay-yellow.svg'

export default {
  title: 'Content/OverlayCard',
  component: OverlayCard,
  argTypes: {
    accentColor: {
      control: {
        type: 'select',
        options: ['$cyan500', '$pink500', '$yellow500', '$purple500']
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

const Template: Story = (args: GetComponentProps<typeof OverlayCard>) => <OverlayCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Try free courses',
  cta: 'View Canvas',
  accentColor: '$pink500',
  image: PinkOverlay,
  onClick: () => null
}
