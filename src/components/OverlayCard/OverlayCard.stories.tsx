import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ResponsiveGrid } from '~/components/ResponsiveGrid'
import { OverlayCard, OverlayCardImage, OverlayCardCTA } from '~/components/OverlayCard'

import PinkOverlay from '~/assets/images/overlay-pink.svg'
import PurpleOverlay from '~/assets/images/overlay-purple.svg'
import TurqOverlay from '~/assets/images/overlay-turq.svg'
import YellowOverlay from '~/assets/images/overlay-yellow.svg'

export default {
  title: 'Components/Cards/OverlayCard',
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

const Template: Story = () => (
  <OverlayCard accentColor="pink">
    <OverlayCardImage src={PinkOverlay}>Coursework & Curriculum</OverlayCardImage>

    <OverlayCardCTA>View Canvas</OverlayCardCTA>
  </OverlayCard>
)

export const Default = Template.bind({})

export const Multiple: Story = () => (
  <ResponsiveGrid min="200px">
    <OverlayCard accentColor="cyan">
      <OverlayCardImage src={TurqOverlay}>Coursework &amp; Curriculum</OverlayCardImage>

      <OverlayCardCTA>View Canvas</OverlayCardCTA>
    </OverlayCard>

    <OverlayCard accentColor="purple">
      <OverlayCardImage src={PurpleOverlay}>Access career services</OverlayCardImage>

      <OverlayCardCTA>View GradLeaders</OverlayCardCTA>
    </OverlayCard>

    <OverlayCard accentColor="pink">
      <OverlayCardImage src={PinkOverlay}>Try free courses</OverlayCardImage>

      <OverlayCardCTA>View Pathwright</OverlayCardCTA>
    </OverlayCard>
  </ResponsiveGrid>
)
