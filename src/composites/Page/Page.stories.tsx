import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Page } from '.'
import { TextCard, Grid, Section, MediaCard, ContentCard } from '~/components'

export default {
  title: 'Composites/Page'
} as Meta

const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU'

const Template: Story = () => (
  <Page style={{ minHeight: '100vh' }}>
    <Section title="Personal Information">
      <Grid container spacing={3}>
        <TextCard label="Full Name" value="John Smith" />
        <TextCard label="Course" value="Software Engineering" />
        <TextCard label="Cohort" value="Fall 2021" />
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

    <Section title="Documents">
      <Grid container>
        <ContentCard
          title="Resume"
          description="title_of_resume.pdf"
          cta="Upload"
          legend="Completed: 1/1/1992"
          middleTitle="Assigned"
          middleDescription="1/2/2233"
          onClick={() => null}
        />
        <ContentCard
          title="Resume"
          description="title_of_resume.pdf"
          cta="Upload"
          legend="Completed: 1/1/1992"
          middleTitle="Assigned"
          middleDescription="1/2/2233"
          onClick={() => null}
        />
        <ContentCard
          title="Resume"
          description="title_of_resume.pdf"
          cta="Upload"
          legend="Completed: 1/1/1992"
          middleTitle="Assigned"
          middleDescription="1/2/2233"
          onClick={() => null}
        />
      </Grid>
    </Section>
  </Page>
)

export const Default = Template.bind({})
