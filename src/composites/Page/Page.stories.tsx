import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Page } from '.'
import { TextCard, Grid, Section, OverlayCard, FileCard } from '~/components'

export default {
  title: 'Composites/Page'
} as Meta

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
        <OverlayCard title="Try free courses" cta="View Pathwright" backgroundStyle="red" onClick={() => null} />
        <OverlayCard title="Course work & Curriculum" cta="View Canvas" backgroundStyle="turq" onClick={() => null} />
        <OverlayCard
          title="Access Career Services"
          cta="View Gradleaders"
          backgroundStyle="purple"
          onClick={() => null}
        />
      </Grid>
    </Section>

    <Section title="Documents">
      <Grid container>
        <FileCard
          type="Resume"
          title="title_of_resume.pdf"
          cta="View"
          secondaryTitle="Assigned"
          secondaryDescription="1/2/2233"
          tertiaryTitle="Completed"
          tertiaryDescription="1/2/2233"
          onClick={() => null}
        />
        <FileCard
          type="Resume"
          cta="Upload"
          secondaryTitle="Assigned"
          secondaryDescription="1/2/2233"
          onClick={() => null}
        />
        <FileCard
          type="Resume"
          title="title_of_resume.pdf"
          cta="View"
          secondaryTitle="Assigned"
          secondaryDescription="1/2/2233"
          tertiaryTitle="Completed"
          tertiaryDescription="1/2/2233"
          onClick={() => null}
        />
      </Grid>
    </Section>
  </Page>
)

export const Default = Template.bind({})
