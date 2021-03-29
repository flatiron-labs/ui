import React from 'react'
import { Story, Meta } from '@storybook/react'

import { MediaCard, MediaCardProps } from '.'
import { ResponsiveGrid } from '~/components/ResponsiveGrid'

export default {
  title: 'Content/MediaCard',
  component: MediaCard
} as Meta

const Template: Story = (args: MediaCardProps) => <MediaCard {...args} />

const TemplateMulti: Story = () => (
  <ResponsiveGrid>
    <MediaCard
      image="https://via.placeholder.com/348x193"
      title="HTML Tutorial for Beginners"
      description="Learn HTML for a career in web development."
      cta="View"
    />
    <MediaCard
      image="https://via.placeholder.com/348x193"
      title="HTML, CSS, JavaScript Explained"
      description="Understanding what languages are used for building websites: HTML, CSS, JavaScript."
      cta="View"
    />
    <MediaCard
      image="https://via.placeholder.com/348x193"
      title="What Can You Do with Python?"
      description="What is Python used for? What can you do with Python? Watch this video to find out."
      cta="View"
    />
    <MediaCard
      image="https://via.placeholder.com/348x193"
      title="Data Science In 5 Minutes"
      description="This 'What is Data Science' video will give you an idea of a life of Data Scientist."
      cta="View"
    />
  </ResponsiveGrid>
)

export const Default = Template.bind({})
Default.args = {
  image: 'https://via.placeholder.com/348x193',
  title: 'What Can You Do with Python?',
  description: "This 'What is Data Science' video will give you an idea of a life of Data Scientist.",
  cta: 'Visit Gradleaders'
}

export const Multiple = TemplateMulti.bind({})
