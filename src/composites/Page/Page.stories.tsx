import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Page } from '.'
import { Section, OverlayCard, FileCard, PageHeading, ResponsiveGrid } from '~/components'

import PinkOverlay from '~/assets/images/overlay-pink.svg'
import PurpleOverlay from '~/assets/images/overlay-purple.svg'
import TurqOverlay from '~/assets/images/overlay-turq.svg'

export default {
  title: 'Composites/Page'
} as Meta

const Template: Story = () => (
  <Page style={{ minHeight: '100vh', position: 'relative' }}>
    <PageHeading title="Welcome Back John Smith!" subtitle="Software Engineering" secondarySubtitle="Fall 2020" />

    <Section title="Links">
      <ResponsiveGrid min="200px">
        {/*
        <OverlayCard accentColor="$pink500">
          <OverlayCard.Image src={{PinkOverlay}} />
          <OverlayCard.Title>Try free courses</OverlayCard.Title>
          <OverlayCard.Button>View Pathwright</OverlayCard.Button>
        </OverlayCard>
        */}

        <OverlayCard title="Try free courses" cta="View Pathwright" accentColor="$pink500" image={PinkOverlay} />
        <OverlayCard title="Course work & Curriculum" cta="View Canvas" accentColor="$cyan500" image={TurqOverlay} />
        <OverlayCard
          title="Access Career Services"
          cta="View Gradleaders"
          accentColor="$purple500"
          image={PurpleOverlay}
        />
      </ResponsiveGrid>
    </Section>

    <Section title="Documents">
      <ResponsiveGrid>
        {/*
        <FileCard type="Resume" title="title_of_resume.pdf">
          <FileCard.Column>
            <FileCard.ColumnTitle>Assigned</FileCard.ColumnTitle>
            <FileCard.ColumnDescription>1/2/2233</FileCard.ColumnDescription>
          </FileCard.Column>
          <FileCard.Column>
            <FileCard.ColumnTitle>Completed</FileCard.ColumnTitle>
            <FileCard.ColumnDescription>1/2/2233</FileCard.ColumnDescription>
          </FileCard.Column>
          <FileCard.Column>
            <FileCard.Button>View</FileCard.Button>
          </FileCard.Column>
        </FileCard>
        */}

        <FileCard
          type="Resume"
          title="title_of_resume.pdf"
          cta="View"
          secondary={{
            title: 'Assigned',
            description: '1/2/2233'
          }}
          tertiary={{
            title: 'Completed',
            description: '1/2/2233'
          }}
          onClick={() => null}
        />
        <FileCard
          type="Resume"
          cta="Upload"
          secondary={{
            title: 'Assigned',
            description: '1/2/2233'
          }}
          onClick={() => null}
        />
        <FileCard
          type="Resume"
          title="title_of_resume.pdf"
          cta="View"
          secondary={{
            title: 'Assigned',
            description: '1/2/2233'
          }}
          tertiary={{
            title: 'Completed',
            description: '1/2/2233'
          }}
          onClick={() => null}
        />
      </ResponsiveGrid>
    </Section>
  </Page>
)

export const Default = Template.bind({})
