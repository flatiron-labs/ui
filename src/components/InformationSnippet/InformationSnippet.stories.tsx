import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Clock, Code, MapPin, User } from 'phosphor-react'

import { InformationSnippet } from '.'

export default {
  title: 'Components/InformationSnippet',
  component: InformationSnippet,
  argTypes: {
    direction: {
      description: 'Adjust direction (used for responsiveness)',
      defaultValue: 'row',
      control: {
        type: 'select',
        options: ['row', 'column'],
        default: 'row'
      }
    }
  }
} as Meta

type Args = GetComponentProps<typeof InformationSnippet>

const Template: Story = (args: Args) => <InformationSnippet {...args} />
const TemplateResponsive: Story = () => (
  <>
    <InformationSnippet direction="row" icon={Code} title="Course" details="Software Engineering" />
    <InformationSnippet direction="column" icon={MapPin} title="Address" details="14411 South 49th Drive New York" />
  </>
)
const TemplateMulti: Story = (args: Args) => (
  <>
    <InformationSnippet {...args} />
    <InformationSnippet icon={Code} title="Course" details="Software Engineering" />
    <InformationSnippet icon={Clock} title="Cohort" details="12/12/2022" />
    <InformationSnippet icon={MapPin} title="Address" details="14411 South 49th Drive New York" />
  </>
)

export const Default = Template.bind({})
Default.args = {
  icon: User,
  title: 'Full Name',
  details: 'John Snow'
}

export const Responsive = TemplateResponsive.bind({})

export const Mulitple = TemplateMulti.bind({})
Mulitple.args = Default.args
