import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '~/components/Button'
import { Document, DocumentColumn, DocumentLegend, DocumentTitle } from '.'

export default {
  title: 'Components/Document',
  component: Document
} as Meta

const legendOffset = {
  marginTop: '6px'
}

export const Default: Story = () => (
  <Document css={legendOffset}>
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
)

export const SingleColumnConsistent: Story = () => (
  <Document css={legendOffset}>
    <DocumentLegend>Resume</DocumentLegend>
    <DocumentTitle>my_resume.pdf</DocumentTitle>

    <DocumentColumn>
      Requested
      <br />
      4/9/2021
    </DocumentColumn>

    <DocumentColumn />

    <DocumentColumn>
      <Button size="large" width="full" href="https://google.com" as="a">
        Upload
      </Button>
    </DocumentColumn>
  </Document>
)

export const SingleColumnFill: Story = () => (
  <Document css={legendOffset}>
    <DocumentLegend>Resume</DocumentLegend>
    <DocumentTitle>my_resume.pdf</DocumentTitle>

    <DocumentColumn>
      Requested
      <br />
      4/9/2021
    </DocumentColumn>

    <DocumentColumn>
      <Button size="large" width="full" href="https://google.com" as="a">
        Upload
      </Button>
    </DocumentColumn>
  </Document>
)
