import React from 'react'
import { Story, Meta } from '@storybook/react'

import { MediaCard, MediaCardProps } from '.'
import { ResponsiveGrid } from '~/components/ResponsiveGrid'

export default {
  title: 'Content/MediaCard',
  component: MediaCard
} as Meta

const onClick = () => null

const Template: Story = (args: MediaCardProps) => <MediaCard {...args} />

const TemplateMulti: Story = () => (
  <ResponsiveGrid>
    <MediaCard
      image="https://via.placeholder.com/350x150"
      title="HTML Tutorial for Beginners"
      description="Learn HTML for a career in web development."
      cta="View"
    />
    <MediaCard
      image="https://via.placeholder.com/350x150"
      title="HTML, CSS, JavaScript Explained"
      description="Understanding what languages are used for building websites: HTML, CSS, JavaScript."
      cta="View"
    />
    <MediaCard
      image="https://via.placeholder.com/350x150"
      title="What Can You Do with Python?"
      description="What is Python used for? What can you do with Python? Watch this video to find out."
      cta="View"
    />
    <MediaCard
      image="https://via.placeholder.com/350x150"
      title="Data Science In 5 Minutes"
      description="This 'What is Data Science' video will give you an idea of a life of Data Scientist."
      cta="View"
    />
  </ResponsiveGrid>
)

export const Default = Template.bind({})
Default.args = {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU',
  title: 'Gradleaders',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  cta: 'Visit Gradleaders',
  onClick
}

export const CustomImageElement = Template.bind({})
CustomImageElement.args = {
  image: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU"
      alt="Nicholas Cage"
    />
  ),
  title: 'Nicholas Cage',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  cta: 'Visit'
}

export const CustomCTAElement = Template.bind({})
CustomCTAElement.args = {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU',
  title: 'Bill Murray',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  cta: (
    <a href="https://google.com" title="Search Google" style={{ color: 'yellow' }}>
      Google
    </a>
  )
}

export const Multiple = TemplateMulti.bind({})
