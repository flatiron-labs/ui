import React from 'react'
import { Story, Meta } from '@storybook/react'
import { OverlayCard } from '.'

import PinkOverlay from '~/assets/images/overlay-pink.svg'
import PurpleOverlay from '~/assets/images/overlay-purple.svg'
import TurqOverlay from '~/assets/images/overlay-turq.svg'
import YellowOverlay from '~/assets/images/overlay-yellow.svg'
import { Grid } from '~/index'

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

const TemplateMulti: Story = () => (
  <Grid container spacing={3} justify="space-between" direction="row" alignItems="stretch">
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
  </Grid>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Try free courses',
  cta: 'View Canvas',
  accentColor: '$pink500',
  image: PinkOverlay,
  onClick: () => null
}

export const Multiple = TemplateMulti.bind({})
