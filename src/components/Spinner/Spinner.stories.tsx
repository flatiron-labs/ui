import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import Spinner from './Spinner'

export default {
  title: 'Notifcations/Spinner',
  component: Spinner
} as Meta

const StyledContainer = styled.div`
    display: flex;  
    justify-content: center;
    background-color: black;
    height: 80px;
  }
`

const Template: Story = () => (
  <StyledContainer>
    <Spinner />
  </StyledContainer>
)

export const Default = Template.bind({})
