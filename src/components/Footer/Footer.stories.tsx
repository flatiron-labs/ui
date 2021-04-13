import React from 'react'
import { Story, Meta } from '@storybook/react'

import { FacebookLogo, GithubLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'

import { Footer, FooterNav, FooterNavLink, FooterSocial, FooterSocialLink } from '~/components/Footer'

export default {
  title: 'Components/Footer'
} as Meta

const Template: Story = (args: unknown) => (
  <Footer {...args}>
    <FooterNav>
      <FooterNavLink href="https://flatironschool.com/accessibility">Accessibility</FooterNavLink>
      <FooterNavLink href="https://portal.flatironschool.com/tos">Terms &amp; Conditions</FooterNavLink>
      <FooterNavLink href="https://portal.flatironschool.com/code-of-conduct">Code of Conduct</FooterNavLink>
      <FooterNavLink href="https://portal.flatironschool.com/privacy">Privacy Policy</FooterNavLink>
    </FooterNav>

    <FooterSocial data-cy="social">
      <FooterSocialLink href="https://facebook.com" title="Facebook">
        <FacebookLogo />
      </FooterSocialLink>
      <FooterSocialLink href="https://twitter.com" title="Twitter">
        <TwitterLogo />
      </FooterSocialLink>
      <FooterSocialLink href="https://instagram.com" title="Instagram">
        <InstagramLogo />
      </FooterSocialLink>
      <FooterSocialLink href="https://github.com" title="GitHub">
        <GithubLogo />
      </FooterSocialLink>
      <FooterSocialLink href="https://youtube.com" title="Youtube">
        <YoutubeLogo />
      </FooterSocialLink>
    </FooterSocial>
  </Footer>
)

export const Default = Template.bind({})
Default.args = {
  lockToBottom: false
}

export const LockedToBottom = Template.bind({})
LockedToBottom.args = {
  lockToBottom: true
}
