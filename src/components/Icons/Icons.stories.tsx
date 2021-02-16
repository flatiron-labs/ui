import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import { Code, Dial, Exit, Hamburger, Home, Location, Lock, Mail, Map, Settings, Time, User } from './index'
import { Props } from './icon.types'

export default {
  title: 'Icons/Icons',
  argTypes: {
    color: { control: 'color' }
  }
} as Meta

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  > * {
    margin: 30px;
  }
`

const Template: Story = (args: Props) => (
  <Container>
    <Code {...args} />
    <Dial {...args} />
    <Exit {...args} />
    <Hamburger {...args} />
    <Home {...args} />
    <Location {...args} />
    <Lock {...args} />
    <Map {...args} />
    <Mail {...args} />
    <Settings {...args} />
    <Time {...args} />
    <User {...args} />
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  color: 'black'
}
