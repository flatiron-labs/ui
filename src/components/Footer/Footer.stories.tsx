import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Footer } from '~/components/Footer'
import { Icon } from '~/components/Icon'

export default {
  title: 'Composites/Footer'
} as Meta

const Template: Story = (args: unknown) => (
  <Footer.Root {...args}>
    <Footer.Nav>
      <Footer.NavLink href="https://flatironschool.com/accessibility">Accessibility</Footer.NavLink>
      <Footer.NavLink href="https://portal.flatironschool.com/tos">Terms &amp; Conditions</Footer.NavLink>
      <Footer.NavLink href="https://portal.flatironschool.com/code-of-conduct">Code of Conduct</Footer.NavLink>
      <Footer.NavLink href="https://portal.flatironschool.com/privacy">Privacy Policy</Footer.NavLink>
    </Footer.Nav>

    <Footer.Social>
      <Footer.SocialLink href="https://facebook.com" title="Facebook">
        <Icon.Facebook />
      </Footer.SocialLink>
      <Footer.SocialLink href="https://twitter.com" title="Twitter">
        <Icon.Twitter />
      </Footer.SocialLink>
      <Footer.SocialLink href="https://instagram.com" title="Instagram">
        <Icon.Instagram />
      </Footer.SocialLink>
      <Footer.SocialLink href="https://github.com" title="GitHub">
        <Icon.Github />
      </Footer.SocialLink>
      <Footer.SocialLink href="https://youtube.com" title="Youtube">
        <Icon.Youtube />
      </Footer.SocialLink>
    </Footer.Social>
  </Footer.Root>
)

export const Default = Template.bind({})
Default.args = {
  lockToBottom: false
}

export const LockedToBottom = Template.bind({})
LockedToBottom.args = {
  lockToBottom: true
}
