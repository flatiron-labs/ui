import React from 'react'
import { Story, Meta } from '@storybook/react'
import { TextCard, Grid, Section } from '~/components'

export default {
  title: 'Layout/Section'
} as Meta

const Template: Story = () => (
  <Section title="Personal Information">
    <Grid container spacing={3}>
      <TextCard label="Full Name" value="John Smith" />
      <TextCard label="Full Name" value="John Smith" />
      <TextCard label="Full Name" value="John Smith" />
    </Grid>
  </Section>
)

export const Default = Template.bind({})
