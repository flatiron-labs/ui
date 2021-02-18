import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'

import { Spinner, SpinnerProps } from '.'

export default {
  title: 'Global/Spinner',
  component: Spinner
} as Meta

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Template: Story = (args: SpinnerProps) => (
  <StyledContainer>
    <Spinner {...args} />
  </StyledContainer>
)

export const Basic = Template.bind({})

export const Resized = Template.bind({})
Resized.args = {
  size: 30
}
