import React from 'react'
import { Story, Meta } from '@storybook/react'

import { OverlayCard } from '~/components/OverlayCard'
import { ResponsiveGrid } from '~/components/ResponsiveGrid'

import PinkOverlay from '~/assets/images/overlay-pink.svg'
import PurpleOverlay from '~/assets/images/overlay-purple.svg'
import TurqOverlay from '~/assets/images/overlay-turq.svg'

export default {
  title: 'Layout/ResponsiveGrid',
  component: ResponsiveGrid
} as Meta

const Template: Story = () => (
  <ResponsiveGrid>
    <OverlayCard
      title="Try free courses"
      cta="View Canvas"
      accentColor="$cyan500"
      image={TurqOverlay}
      onClick={() => null}
    />
    <OverlayCard
      title="Try free courses"
      cta="View Canvas"
      accentColor="$pink500"
      image={PinkOverlay}
      onClick={() => null}
    />
    <OverlayCard
      title="Try free courses"
      cta="View Canvas"
      accentColor="$purple500"
      image={PurpleOverlay}
      onClick={() => null}
    />
  </ResponsiveGrid>
)

export const Default = Template.bind({})
