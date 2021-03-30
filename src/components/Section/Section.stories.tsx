import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ResponsiveGrid, Section, TextCard } from '~/components'

export default {
  title: 'Layout/Section'
} as Meta

const Template: Story = (args: GetComponentProps<typeof Section>) => (
  <Section {...args}>
    <ResponsiveGrid>
      <TextCard label="Full Name" value="John Smith" />
      <TextCard label="Full Name" value="John Smith" />
      <TextCard label="Full Name" value="John Smith" />
    </ResponsiveGrid>
  </Section>
)

const TemplateDynamic: Story = args => (
  <Section {...args}>
    <p>Data: {JSON.stringify(args.data)}</p>
  </Section>
)

export const Default = Template.bind({})

export const WithTitle = Template.bind({})
WithTitle.args = { title: 'Personal Information' }

export const DynamicSectionLoading = Template.bind({})
DynamicSectionLoading.args = { title: 'Personal Information', dynamic: true }

export const DynamicSectionError = Template.bind({})
DynamicSectionError.args = { title: 'Personal Information', dynamic: true, error: 'foo' }

export const DynamicSectionLoaded = TemplateDynamic.bind({})
DynamicSectionLoaded.args = { title: 'Personal Information', dynamic: true, data: { test: 'data', foo: 'bar' } }
