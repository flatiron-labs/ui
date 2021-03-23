import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Sidebar } from '.'
import { NavLink, NavContainer } from '~/components'

export default {
  title: 'Navigation/Sidebar',
  subcomponents: { NavLink, NavContainer },
  component: Sidebar
} as Meta

const Template: Story = () => (
  <Sidebar expanded>
    <NavContainer ariaLabel="primary">
      <NavLink href="/" icon="Home">
        Home
      </NavLink>
      <NavLink href="/profile" icon="User">
        Profile
      </NavLink>
      <NavLink href="/settings" icon="Settings">
        Settings
      </NavLink>
    </NavContainer>
  </Sidebar>
)

export const Default = Template.bind({})
Default.args = {}
