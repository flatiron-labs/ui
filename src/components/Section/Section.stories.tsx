import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ContentCard, Grid, Section } from '~/components'

export default {
  title: 'Layout/Section'
} as Meta

const Template: Story = () => (
  <Section title="Personal Information">
    <Grid container spacing={3}>
      <ContentCard label="Full Name" value="John Smith" />
      <ContentCard label="Full Name" value="John Smith" />
      <ContentCard label="Full Name" value="John Smith" />
    </Grid>
  </Section>
)

export const Default = Template.bind({})
