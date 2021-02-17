import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { SideNav, SideNavProps, SideNavItem } from '.'
import { Layout } from '../Layout'

export default {
  title: 'Navigation/SideNav',
  component: SideNav
} as Meta

const Template: Story<SideNavProps> = () => {
  const [isOpen, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(true)
  }
  return (
    <Layout>
      <SideNav handleClose={handleClose} isOpen={isOpen}>
        <SideNavItem>Home</SideNavItem>
        <SideNavItem active>Profile</SideNavItem>
        <SideNavItem>Settings</SideNavItem>
      </SideNav>
    </Layout>
  )
}

export const Default = Template.bind({})
