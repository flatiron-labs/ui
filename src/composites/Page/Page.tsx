import React from 'react'
import styled from 'styled-components'
import { Grid, Footer, Sidebar, NavContainer, NavLink, Icon } from '~/components' // Intentionally using the root index.ts

export interface Props {
  children: JSX.Element[]
  style?: React.CSSProperties
}

const StyledContent = styled(props => <Grid container item {...props} />)`
  align-items: flex-start;
  align-content: flex-start;
  padding: 62px 30px 62px 40px;

  @media only screen and (min-width: 601px)  {
    padding-left: 300px;
  }
`

export const Page: FC<Props> = ({ children, ...props }) => (
  <Grid item {...props}>
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid container wrap="nowrap" style={{ paddingBottom: '40px' }}>
        <Sidebar expanded>
          <NavContainer>
            <NavLink href="/" icon="Home">
              Home
            </NavLink>
            <NavLink href="/profile" icon="User">
              Profile
            </NavLink>
            <NavLink href="/settings" icon="Settings">
              Settings
            </NavLink>
          </NavContainer>
        </Sidebar>
        <Grid item>
          <StyledContent>{children}</StyledContent>
        </Grid>
      </Grid>
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
    </Grid>
  </Grid>
)
