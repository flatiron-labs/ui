import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import { IcoProps } from './Icon'
import { Icon } from '.'
import { Color } from '~/styles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  > * {
    margin: 30px;
  }
`
export default {
  title: 'Icons/Icon',
  argTypes: {
    color: { control: 'color' }
  }
} as Meta

const Template: Story = (args: IcoProps) => (
  <Container>
    <Icon.Code {...args} />
    <Icon.Dial {...args} />
    <Icon.Exit {...args} />
    <Icon.Hamburger {...args} />
    <Icon.Home {...args} />
    <Icon.Location {...args} />
    <Icon.Lock {...args} />
    <Icon.Map {...args} />
    <Icon.Mail {...args} />
    <Icon.Settings {...args} />
    <Icon.Time {...args} />
    <Icon.User {...args} />
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  color: Color.white
}
