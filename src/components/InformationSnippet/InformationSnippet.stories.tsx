import React from 'react'
import { Story, Meta } from '@storybook/react'
import { InformationSnippet, InformationSnippetProps } from '.'
import { Grid } from '~/index'

export default {
  title: 'Inputs/InformationSnippet',
  component: InformationSnippet
} as Meta

const Template: Story = (args: InformationSnippetProps) => <InformationSnippet {...args} />

const TemplateMulti: Story = (args: InformationSnippetProps) => (
  <Grid>
    <InformationSnippet {...args} />
    <InformationSnippet icon="Code" title="Course" details="Software Engineering" />
    <InformationSnippet icon="Time" title="Cohort" details="12/12/2022" />
    <InformationSnippet icon="Location" title="Address" details="14411 South 49th Drive New York" />
  </Grid>
)

export const Default = Template.bind({})
Default.args = {
  icon: 'User',
  title: 'Full Name',
  details: 'John Snow'
}

export const Mulitple = TemplateMulti.bind({})
Mulitple.args = {
  icon: 'User',
  title: 'Full Name',
  details: 'John Snow'
}
