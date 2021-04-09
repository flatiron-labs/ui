import React from 'react'

import { FacebookLogo, Gear, GithubLogo, House, InstagramLogo, TwitterLogo, User, YoutubeLogo } from 'phosphor-react'

import { styled } from '~/styles/stitches.config'
import { Footer, Sidebar, Nav } from '~/components' // Intentionally using the root index.ts

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
        <Nav.Root>
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
        </Nav.Root>
      </Sidebar>

      <Content>{children}</Content>
    </div>

    <Footer.Root lockToBottom>
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
  </Container>
)
