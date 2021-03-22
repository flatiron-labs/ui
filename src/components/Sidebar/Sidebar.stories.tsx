import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import { Sidebar } from '.'
import { FlatironLogo, NavLink, NavLinkContainer } from '~/components'
import { Media } from '~/styles'

export default {
  title: 'Navigation/Sidebar',
  subcomponents: { NavLink, NavLinkContainer },
  component: Sidebar
} as Meta

const LogoContainer = styled.div`
  padding: 25px 0px 10px 15%;
  ${Media.md} {
    padding-top: 50px;
  }
`

const Template: Story = () => (
  <Sidebar expanded>
    <LogoContainer>
      <FlatironLogo />
    </LogoContainer>
    <NavLinkContainer>
      <NavLink href="/" icon="Home">
        Home
      </NavLink>
      <NavLink href="/profile" icon="User">
        Profile
      </NavLink>
      <NavLink href="/settings" icon="Settings">
        Settings
      </NavLink>
    </NavLinkContainer>
  </Sidebar>
)

export const Default = Template.bind({})
Default.args = {}
