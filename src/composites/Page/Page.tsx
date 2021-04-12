import React from 'react'

import { FacebookLogo, Gear, GithubLogo, House, InstagramLogo, TwitterLogo, User, YoutubeLogo } from 'phosphor-react'

import { styled } from '~/styles/stitches.config'
import {
  Footer,
  FooterNav,
  FooterNavLink,
  FooterSocial,
  FooterSocialLink,
  Sidebar,
  Nav,
  NavLink,
  NavLinkTitle
} from '~/components' // Intentionally using the root index.ts

const Container = styled('div', {
  minHeight: '100vh',
  position: 'relative'
})

const Content = styled('div', {
  display: 'grid',
  gap: '$12',
  padding: '62px 30px 62px 40px',

  '@media only screen and (min-width: 601px)': {
    paddingLeft: '300px'
  }
})

export const Page: FC = ({ children, ...props }) => (
  <Container {...props}>
    <div style={{ paddingBottom: '40px' }}>
      <Sidebar expanded>
        <Nav>
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

      <Content>{children}</Content>
    </div>

    <Footer lockToBottom>
      <FooterNav>
        <FooterNavLink href="https://flatironschool.com/accessibility">Accessibility</FooterNavLink>
        <FooterNavLink href="https://portal.flatironschool.com/tos">Terms &amp; Conditions</FooterNavLink>
        <FooterNavLink href="https://portal.flatironschool.com/code-of-conduct">Code of Conduct</FooterNavLink>
        <FooterNavLink href="https://portal.flatironschool.com/privacy">Privacy Policy</FooterNavLink>
      </FooterNav>

      <FooterSocial>
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
  </Container>
)
