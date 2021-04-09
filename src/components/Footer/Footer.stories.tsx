import React from 'react'
import { Story, Meta } from '@storybook/react'

import { FacebookLogo, GithubLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'

import { Footer } from '~/components/Footer'

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
        <FacebookLogo />
      </Footer.SocialLink>
      <Footer.SocialLink href="https://twitter.com" title="Twitter">
        <TwitterLogo />
      </Footer.SocialLink>
      <Footer.SocialLink href="https://instagram.com" title="Instagram">
        <InstagramLogo />
      </Footer.SocialLink>
      <Footer.SocialLink href="https://github.com" title="GitHub">
        <GithubLogo />
      </Footer.SocialLink>
      <Footer.SocialLink href="https://youtube.com" title="Youtube">
        <YoutubeLogo />
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
