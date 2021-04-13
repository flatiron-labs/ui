import React from 'react'
import { Story, Meta } from '@storybook/react'

import { LoadingIndicator } from '.'

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator
} as Meta

export const Default: Story = () => <LoadingIndicator />
