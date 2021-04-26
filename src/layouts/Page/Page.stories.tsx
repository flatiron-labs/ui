import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Page } from '.'
import {
  Button,
  Document,
  DocumentColumn,
  DocumentLegend,
  DocumentTitle,
  MediaCard,
  MediaCardContent,
  MediaCardCTA,
  MediaCardDescription,
  MediaCardImage,
  MediaCardTitle,
  OverlayCard,
  OverlayCardImage,
  OverlayCardCTA,
  PageHeading,
  PageHeadingContent,
  PageHeadingSubtitle,
  PageHeadingTitle,
  ResponsiveGrid,
  Section
} from '~/components'

import PinkOverlay from '~/assets/images/overlay-pink.svg'
import PurpleOverlay from '~/assets/images/overlay-purple.svg'
import TurqOverlay from '~/assets/images/overlay-turq.svg'

export default {
  title: 'Layouts/Page'
} as Meta

const Template: Story = () => (
  <Page>
    <PageHeading>
      <PageHeadingTitle>Welcome Back John Smith!</PageHeadingTitle>
      <PageHeadingSubtitle>
        <PageHeadingContent highlight>Software Engineering</PageHeadingContent>
        <PageHeadingContent>Fall 2020</PageHeadingContent>
      </PageHeadingSubtitle>
    </PageHeading>

    <Section title="Links">
      <ResponsiveGrid min="200px">
        <OverlayCard accentColor="cyan">
          <OverlayCardImage src={TurqOverlay}>Coursework &amp; Curriculum</OverlayCardImage>

          <OverlayCardCTA>View Canvas</OverlayCardCTA>
        </OverlayCard>

        <OverlayCard accentColor="purple">
          <OverlayCardImage src={PurpleOverlay}>Access career services</OverlayCardImage>

          <OverlayCardCTA>View GradLeaders</OverlayCardCTA>
        </OverlayCard>

        <OverlayCard accentColor="pink">
          <OverlayCardImage src={PinkOverlay}>Try free courses</OverlayCardImage>

          <OverlayCardCTA>View Pathwright</OverlayCardCTA>
        </OverlayCard>
      </ResponsiveGrid>
    </Section>

    <Section title="Documents">
      <ResponsiveGrid>
        <Document>
          <DocumentLegend>Resume</DocumentLegend>
          <DocumentTitle>my_resume.pdf</DocumentTitle>

          <DocumentColumn>
            Requested
            <br />
            4/9/2021
          </DocumentColumn>

          <DocumentColumn>
            Uploaded
            <br />
            4/16/2021
          </DocumentColumn>

          <DocumentColumn>
            <Button size="large" width="full" href="https://google.com" as="a">
              View
            </Button>
          </DocumentColumn>
        </Document>
      </ResponsiveGrid>
    </Section>

    <Section title="Recommended Content">
      <ResponsiveGrid min="200px">
        <MediaCard>
          <MediaCardImage src="https://via.placeholder.com/348x193" alt="Image: HTML Tutorial for Beginners" />

          <MediaCardContent>
            <MediaCardTitle>HTML Tutorial for Beginners</MediaCardTitle>
            <MediaCardDescription>Learn HTML for a career in web development.</MediaCardDescription>
            <MediaCardCTA>View</MediaCardCTA>
          </MediaCardContent>
        </MediaCard>

        <MediaCard>
          <MediaCardImage src="https://via.placeholder.com/348x193" alt="Image: HTML, CSS, JavaScript Explained" />

          <MediaCardContent>
            <MediaCardTitle>HTML, CSS, JavaScript Explained</MediaCardTitle>
            <MediaCardDescription>
              Understanding what languages are used for building websites: HTML, CSS, JavaScript.
            </MediaCardDescription>
            <MediaCardCTA>View</MediaCardCTA>
          </MediaCardContent>
        </MediaCard>

        <MediaCard>
          <MediaCardImage src="https://via.placeholder.com/348x193" alt="Image: What Can You Do with Python?" />

          <MediaCardContent>
            <MediaCardTitle>What Can You Do with Python?</MediaCardTitle>
            <MediaCardDescription>
              What is Python used for? What can you do with Python? Watch this video to find out.
            </MediaCardDescription>
            <MediaCardCTA>View</MediaCardCTA>
          </MediaCardContent>
        </MediaCard>

        <MediaCard>
          <MediaCardImage src="https://via.placeholder.com/348x193" alt="Image: Data Science In 5 Minutes" />

          <MediaCardContent>
            <MediaCardTitle>Data Science In 5 Minutes</MediaCardTitle>
            <MediaCardDescription>
              This 'What is Data Science' video will give you an idea of a life of Data Scientist.
            </MediaCardDescription>
            <MediaCardCTA>View</MediaCardCTA>
          </MediaCardContent>
        </MediaCard>
      </ResponsiveGrid>
    </Section>
  </Page>
)

export const Default = Template.bind({})
