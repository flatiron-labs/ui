import React from 'react'
import styled from 'styled-components'
import { Grid, Footer, Sidebar, Media, NavContainer, NavLink } from '~/index' // Intentionally using the root index.ts

export interface PageProps {
  children: JSX.Element[]
  style?: React.CSSProperties
}

const StyledContent = styled(props => <Grid container item {...props} />)`
  align-items: flex-start;
  align-content: flex-start;
  padding: 62px 30px 62px 40px;

  ${Media.md} {
    padding-left: 300px;
  }
`

export const Page = ({ children, ...props }: PageProps): JSX.Element => (
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
      <Footer />
    </Grid>
  </Grid>
)
