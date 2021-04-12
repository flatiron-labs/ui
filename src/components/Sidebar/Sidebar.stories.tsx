import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Gear, House, User } from 'phosphor-react'

import { Sidebar } from '.'
import { Nav, NavLink, NavLinkTitle } from '~/components/Nav'

export default {
  title: 'Global/Sidebar',
  component: Sidebar
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
    </Nav>
  </Sidebar>
)

export const Default = Template.bind({})
Default.args = {}
