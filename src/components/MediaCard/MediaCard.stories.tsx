import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MediaCard, MediaCardProps } from '.'
import { Button, Grid, Heading } from '~/index'
import { Color } from '~/styles'

export default {
  title: 'Content/MediaCard',
  component: MediaCard
} as Meta

const Template: Story = (args: MediaCardProps) => (
  <Grid container spacing={3}>
    <MediaCard {...args}>
      <Heading bold h4 color={Color.turq}>
        Gradleaders
      </Heading>
      <p>this is information about gradleaders</p>
      <Button width="100%" md>
        View Gradleaders
      </Button>
    </MediaCard>
  </Grid>
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU'
}
