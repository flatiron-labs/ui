import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Footer } from '.'

export default {
  title: 'Composites/Footer',
  component: Footer
} as Meta

const Template: Story = () => <Footer />

export const Default = Template.bind({})
