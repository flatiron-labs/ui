import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Grid } from '~/components'
import { MediaCard, MediaCardProps } from '.'

export default {
  title: 'Content/MediaCard',
  component: MediaCard
} as Meta

const Template: Story = ({ title, image, description, buttonText, onClick }: MediaCardProps) => (
  <Grid container spacing={3}>
    <MediaCard image={image} title={title} description={description} buttonText={buttonText} onClick={onClick} />
  </Grid>
)

const TemplateMulti: Story = () => (
  <Grid container spacing={3} justify="space-between" direction="row" alignItems="stretch">
    <MediaCard
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU"
      title="Gradleaders"
      description="sagittis eu volutpat odio facilisis mauris sit"
      buttonText="View Gradleaders"
      onClick={() => null}
    />
    <MediaCard
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU"
      title="Gradleaders"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      buttonText="View Gradleaders"
      onClick={() => null}
    />
    <MediaCard
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU"
      title="Gradleaders"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi."
      buttonText="View Gradleaders"
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
  buttonText: 'Visit Gradleaders',
  onClick: () => null
}

export const CustomImageElement = Template.bind({})
CustomImageElement.args = {
  image: <img src="https://www.placecage.com/318/159" alt="Nicholas Cage" style={{ outline: '1px solid red' }} />,
  title: 'Nicholas Cage',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonText: 'Visit'
}

export const Multiple = TemplateMulti.bind({})
