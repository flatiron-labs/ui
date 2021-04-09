import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Gear, House, User } from 'phosphor-react'

import { Sidebar } from '~/components/Sidebar'
import { Nav } from '~/components/Nav'

export default {
  title: 'Global/Navigation',
  component: Nav.Root
} as Meta

const Template: Story = () => (
  <Sidebar expanded>
    <Nav.Root title="primary">
      <Nav.Link href="/">
        <House />
        <Nav.Title>Home</Nav.Title>
      </Nav.Link>

      <Nav.Link href="/profile">
        <User />
        <Nav.Title>Profile</Nav.Title>
      </Nav.Link>

      <Nav.Link href="/settings">
        <Gear />
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
