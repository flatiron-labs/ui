import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import { SideNav, SideNavProps, SideNavItem } from '.'

export default {
  title: 'Navigation/SideNav',
  component: SideNav
} as Meta

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 1000px;
`

const Template: Story<SideNavProps> = () => {
  const [isOpen, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(true)
  }
  return (
    <Container>
      <SideNav handleClose={handleClose} isOpen={isOpen}>
        <SideNavItem>Home</SideNavItem>
        <SideNavItem active>Profile</SideNavItem>
        <SideNavItem>Settings</SideNavItem>
      </SideNav>
    </Container>
  )
}

export const Default = Template.bind({})
