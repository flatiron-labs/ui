import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Gear, House, User } from 'phosphor-react'

import { Sidebar } from '~/components/Sidebar'
import { Nav, NavLink, NavLinkTitle } from '~/components/Nav'

export default {
  title: 'Global/Navigation',
  component: Nav
} as Meta

const Template: Story = () => (
  <Sidebar expanded>
    <Nav title="primary">
      <NavLink href="/">
        <House />
        <NavLinkTitle>Home</NavLinkTitle>
      </NavLink>

      <NavLink href="/profile">
        <User />
        <NavLinkTitle>Profile</NavLinkTitle>
      </NavLink>

      <NavLink href="/settings">
        <Gear />
        <NavLinkTitle>Settings</NavLinkTitle>
      </NavLink>

      <NavLink href="/">
        <NavLinkTitle>Link w/o Icon</NavLinkTitle>
      </NavLink>
    </Nav>
  </Sidebar>
)

export const Default = Template.bind({})
Default.args = {}
