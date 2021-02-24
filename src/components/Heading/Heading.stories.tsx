import React from 'react'
import { Story, Meta } from '@storybook/react'
import { H1, H2, H3, H4 } from '.'

export default {
  title: 'Typography/Heading',
  component: H1
} as Meta

const Template1: Story = () => <H1>Header</H1>
const Template2: Story = () => <H2>Header</H2>
const Template3: Story = () => <H3>Header</H3>
const Template4: Story = () => <H4>Header</H4>

export const Default = Template1.bind({})

export const Heading1 = Template1.bind({})

export const Heading2 = Template2.bind({})

export const Heading3 = Template3.bind({})

export const Heading4 = Template4.bind({})
