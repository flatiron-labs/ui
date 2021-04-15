import React from 'react'
import { Story, Meta } from '@storybook/react'
import { PageHeading, PageHeadingTitle, PageHeadingSubtitle, PageHeadingContent } from '~/components/PageHeading'

export default {
  title: 'Components/PageHeading',
  component: PageHeading
} as Meta

export const Default: Story = () => (
  <PageHeading>
    <PageHeadingTitle data-cy="title">Welcome John Doe</PageHeadingTitle>
    <PageHeadingSubtitle data-cy="subtitle">
      <PageHeadingContent highlight>Software Engineering</PageHeadingContent>
      <PageHeadingContent>Fall 2021</PageHeadingContent>
    </PageHeadingSubtitle>
  </PageHeading>
)

export const TitleOnly: Story = () => (
  <PageHeading>
    <PageHeadingTitle data-cy="title">Welcome John Doe</PageHeadingTitle>
  </PageHeading>
)

export const TitleOnlyWithoutComposition: Story = () => <PageHeading data-cy="container">Welcome John Doe</PageHeading>

export const SubtitleWithoutComposition: Story = () => (
  <PageHeading>
    <PageHeadingTitle data-cy="title">Welcome John Doe</PageHeadingTitle>
    <PageHeadingSubtitle data-cy="subtitle">Software Engineering</PageHeadingSubtitle>
  </PageHeading>
)
