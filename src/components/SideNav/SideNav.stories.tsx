import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import SideNav from './SideNav'
import SideNavItem from './SideNavItem/SideNavItem'
import { Props } from './SideNav.types'

export default {
  title: 'Navigation/SideNav',
  component: SideNav
} as Meta

const Template: Story<Props> = () => {
  const [closed, setClose] = useState(false)

  const handleClose = () => {
    setClose(true)
  }
  return (
    <SideNav closed={closed} handleClose={handleClose}>
      <SideNavItem>Home</SideNavItem>
      <SideNavItem active>Profile</SideNavItem>
      <SideNavItem>Settings</SideNavItem>
    </SideNav>
  )
}

export const Default = Template.bind({})
