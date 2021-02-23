import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Grid } from '~/components'
import { MediaCard, MediaCardProps } from '.'

export default {
  title: 'Content/MediaCard',
  component: MediaCard
} as Meta

const Template: Story = (args: MediaCardProps) => (
  <Grid container spacing={3}>
    <MediaCard {...args} />
  </Grid>
)

const TemplateMulti: Story = () => (
  <Grid container spacing={3} justify="space-between" direction="row" alignItems="stretch">
    <MediaCard
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU"
      title="Gradleaders"
      description="sagittis eu volutpat odio facilisis mauris sit"
      cta="View Gradleaders"
      onClick={() => null}
    />
    <MediaCard
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU"
      title="Gradleaders"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      cta="View Gradleaders"
      onClick={() => null}
    />
    <MediaCard
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU"
      title="Gradleaders"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi."
      cta="View Gradleaders"
      onClick={() => null}
    />
  </Grid>
)

export const Default = Template.bind({})
Default.args = {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU',
  title: 'Gradleaders',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  cta: 'Visit Gradleaders',
  onClick: () => null
}

export const CustomImageElement = Template.bind({})
CustomImageElement.args = {
  image: <img src="https://www.placecage.com/318/159" alt="Nicholas Cage" />,
  title: 'Nicholas Cage',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  cta: 'Visit'
}

export const CustomCTAElement = Template.bind({})
CustomCTAElement.args = {
  image: 'https://www.fillmurray.com/g/318/159',
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
