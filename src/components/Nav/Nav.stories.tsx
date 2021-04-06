import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Sidebar } from '~/components/Sidebar'
import { Nav } from '~/components/Nav'
import { Icon } from '~/components/Icon'

export default {
  title: 'Global/Navigation',
  component: Nav.Root
} as Meta

const Template: Story = () => (
  <Sidebar expanded>
    <Nav.Root title="primary">
      <Nav.Link href="/">
        <Icon.Home />
        <Nav.Title>Home</Nav.Title>
      </Nav.Link>

      <Nav.Link href="/profile">
        <Icon.User />
        <Nav.Title>Profile</Nav.Title>
      </Nav.Link>

      <Nav.Link href="/settings">
        <Icon.Settings />
        <Nav.Title>Settings</Nav.Title>
      </Nav.Link>

      <Nav.Link href="/">
        <Nav.Title>Link w/o Icon</Nav.Title>
      </Nav.Link>
    </Nav.Root>
  </Sidebar>
)

export const Default = Template.bind({})
Default.args = {}
