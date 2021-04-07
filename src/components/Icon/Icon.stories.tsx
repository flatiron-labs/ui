import React from 'react'
import { Story, Meta } from '@storybook/react'

import { styled } from '~/styles/stitches.config'
import { Icon } from '~/components/Icon'

const Container = styled('div', {
  svg: {
    display: 'block',
    marginBottom: '10px'
  }
})

export default {
  title: 'Global/Icon',
  argTypes: {
    color: { control: 'color' }
  }
} as Meta

type Props = typeof Icon.Code

const Template: Story = (args: GetComponentProps<Props>) => (
  <Container>
    <Icon.LoadingIndicator {...args} />
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
    <Icon.Facebook {...args} />
    <Icon.Twitter {...args} />
    <Icon.Github {...args} />
    <Icon.Instagram {...args} />
    <Icon.Youtube {...args} />
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  color: 'white'
}
