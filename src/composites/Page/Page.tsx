import React from 'react'
import styled from 'styled-components'
import { Grid, Header, Footer, Sidebar, Media, FlatironLogo, NavLinkContainer, NavLink } from '~/index' // Intentionally using the root index.ts

export interface PageProps {
  children: JSX.Element[]
  style?: React.CSSProperties
}

const StyledContent = styled(props => <Grid container item {...props} />)`
  align-items: flex-start;
  align-content: flex-start;
  padding-top: 62px;
  padding-bottom: 62px;
  padding-right: 30px;
  padding-left: 40px;
  ${Media.md} {
    padding-left: 300px;
  }
`

const LogoContainer = styled.div`
  padding: 25px 0px 10px 15%;
  ${Media.md} {
    padding-top: 50px;
  }
`

export const Page = ({ children, ...props }: PageProps): JSX.Element => (
  <Grid item {...props}>
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid container wrap="nowrap" style={{ paddingBottom: '40px' }}>
        <Sidebar expanded>
          <LogoContainer>
            <FlatironLogo />
          </LogoContainer>
          <NavLinkContainer>
            <NavLink href="/" icon="Home">
              Home
            </NavLink>
            <NavLink href="/profile" icon="User">
              Profile
            </NavLink>
            <NavLink href="/settings" icon="Settings">
              Settings
            </NavLink>
          </NavLinkContainer>
        </Sidebar>
        <Grid item>
          <StyledContent>{children}</StyledContent>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  </Grid>
)
