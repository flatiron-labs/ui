import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Page } from '.'
import { Grid, Section, MediaCard, FileCard, MainHeader } from '~/components'

export default {
  title: 'Composites/Page'
} as Meta

const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU'

const Template: Story = () => (
  <Page style={{ minHeight: '100vh' }}>
    <Section minHeight="50px">
      <MainHeader secondarySubheader="Fall 2020" subheader="Software Engineering" header="Welcome Back John Smith!" />
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
