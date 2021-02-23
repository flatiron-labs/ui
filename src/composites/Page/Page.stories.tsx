import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Page } from '.'
import { ContentCard, Grid, Section, MediaCard } from '~/components'

export default {
  title: 'Composites/Page'
} as Meta

const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU'

const Template: Story = () => (
  <Page style={{ minHeight: '100vh' }}>
    <Section title="Personal Information">
      <Grid container spacing={3}>
        <ContentCard label="Full Name" value="John Smith" />
        <ContentCard label="Course" value="Software Engineering" />
        <ContentCard label="Cohort" value="Fall 2021" />
      </Grid>
    </Section>

    <Section title="Links">
      <Grid container spacing={3}>
        <MediaCard
          image={src}
          title="Gradleaders"
          description="this is information about gradleaders"
          cta="View Gradleaders"
          onClick={() => null}
        />
        <MediaCard
          image={src}
          title="Gradleaders"
          description="this is information about gradleaders"
          cta="View Gradleaders"
          onClick={() => null}
        />
        <MediaCard
          image={src}
          title="Gradleaders"
          description="this is information about gradleaders"
          cta="View Gradleaders"
          onClick={() => null}
        />
      </Grid>
    </Section>
  </Page>
)

export const Default = Template.bind({})
