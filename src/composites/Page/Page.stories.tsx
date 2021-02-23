import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Page } from '.'
import { Button, ContentCard, Grid, Heading, Section } from '~/components'
import { MediaCard } from '~/components/MediaCard'
import { Color } from '~/styles'

export default {
  title: 'Composites/Page'
} as Meta

const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU'

const Template: Story = () => (
  <Page style={{ minHeight: '100vh' }}>
    <Section title="Personal Information">
      <Grid container spacing={3}>
        <ContentCard label="Full Name" value="John Smith" />
        <ContentCard label="Full Name" value="John Smith" />
        <ContentCard label="Full Name" value="John Smith" />
      </Grid>
    </Section>

    <Section title="Links">
      <Grid container spacing={3}>
        <MediaCard src={src}>
          <Heading bold h4 color={Color.turq}>
            Gradleaders
          </Heading>
          <p>this is information about gradleaders</p>
          <Button width="100%" md>
            View Gradleaders
          </Button>
        </MediaCard>

        <MediaCard src={src}>
          <Heading bold h4 color={Color.turq}>
            Gradleaders
          </Heading>
          <p>this is information about gradleaders</p>
          <Button width="100%" md>
            View Pathright
          </Button>
        </MediaCard>

        <MediaCard src={src}>
          <Heading bold h4 color={Color.turq}>
            Gradleaders
          </Heading>
          <p>this is information about gradleaders</p>
          <Button width="100%" md>
            View Gradleaders
          </Button>
        </MediaCard>
      </Grid>
    </Section>
  </Page>
)

export const Default = Template.bind({})
