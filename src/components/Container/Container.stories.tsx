/* eslint-disable no-alert */
import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Container } from '~/components/Container'

export default {
  title: 'Components/Container',
  component: Container
} as Meta

export const Default: Story = () => <Container>[children]</Container>
