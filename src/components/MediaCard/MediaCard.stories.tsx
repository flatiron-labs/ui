import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ResponsiveGrid } from '~/components/ResponsiveGrid'
import {
  MediaCard,
  MediaCardImage,
  MediaCardContent,
  MediaCardTitle,
  MediaCardDescription,
  MediaCardCTA
} from '~/components/MediaCard'

export default {
  title: 'Components/Cards/MediaCard',
  component: MediaCard
} as Meta

const Template: Story = () => (
  <MediaCard>
    <MediaCardImage src="https://via.placeholder.com/348x193" alt="Image: HTML Tutorial for Beginners" />

    <MediaCardContent>
      <MediaCardTitle>HTML Tutorial for Beginners</MediaCardTitle>
      <MediaCardDescription>Learn HTML for a career in web development.</MediaCardDescription>
      <MediaCardCTA>View</MediaCardCTA>
    </MediaCardContent>
  </MediaCard>
)

const TemplateMulti: Story = () => (
  <ResponsiveGrid min="200px">
    <MediaCard>
      <MediaCardImage src="https://via.placeholder.com/348x193" alt="Image: HTML Tutorial for Beginners" />

      <MediaCardContent>
        <MediaCardTitle>HTML Tutorial for Beginners</MediaCardTitle>
        <MediaCardDescription>Learn HTML for a career in web development.</MediaCardDescription>
        <MediaCardCTA>View</MediaCardCTA>
      </MediaCardContent>
    </MediaCard>

    <MediaCard>
      <MediaCardImage src="https://via.placeholder.com/348x193" alt="Image: HTML, CSS, JavaScript Explained" />

      <MediaCardContent>
        <MediaCardTitle>HTML, CSS, JavaScript Explained</MediaCardTitle>
        <MediaCardDescription>
          Understanding what languages are used for building websites: HTML, CSS, JavaScript.
        </MediaCardDescription>
        <MediaCardCTA>View</MediaCardCTA>
      </MediaCardContent>
    </MediaCard>

    <MediaCard>
      <MediaCardImage src="https://via.placeholder.com/348x193" alt="Image: What Can You Do with Python?" />

      <MediaCardContent>
        <MediaCardTitle>What Can You Do with Python?</MediaCardTitle>
        <MediaCardDescription>
          What is Python used for? What can you do with Python? Watch this video to find out.
        </MediaCardDescription>
        <MediaCardCTA>View</MediaCardCTA>
      </MediaCardContent>
    </MediaCard>

    <MediaCard>
      <MediaCardImage src="https://via.placeholder.com/348x193" alt="Image: Data Science In 5 Minutes" />

      <MediaCardContent>
        <MediaCardTitle>Data Science In 5 Minutes</MediaCardTitle>
        <MediaCardDescription>
          This 'What is Data Science' video will give you an idea of a life of Data Scientist.
        </MediaCardDescription>
        <MediaCardCTA>View</MediaCardCTA>
      </MediaCardContent>
    </MediaCard>
  </ResponsiveGrid>
)

export const Default = Template.bind({})
export const Multiple = TemplateMulti.bind({})
