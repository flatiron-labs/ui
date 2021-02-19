import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid, Avatar, Icon, Hidden } from '~/components'
import { Color, Media } from '~/styles'

interface StyledLinkProps {
  active?: boolean
}

const StyledButton = styled.button`
  border-top-style: none;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const StyledSidebar = styled(Grid)`
  border-right: 1px ${Color.greyDarkest} solid;
  padding: 62px 0 0 0;
`

const StyledLink = styled.a<StyledLinkProps>`
  color: ${Color.white};
  display: flex;
  font-size: 19px;
  text-decoration: none;
  padding: 14px 0 15px;
  justify-content: center;
  align-items: center;

  ${props =>
    props.active &&
    `
    color: ${Color.turq};
    background: linear-gradient(to right, ${Color.black}, ${Color.greyDarkest} 12%);
  `}

  &:hover {
    color: ${Color.turq};
    background: linear-gradient(to right, ${Color.black}, ${Color.greyDarkest} 12%);
  }

  ${Media.md} {
    padding: 14px 0 15px 15%;
    justify-content: start;

    svg {
      margin-right: 10px;
    }
  }
`

const StyledAvatar = styled(Avatar)`
  margin: 0 auto 40px;
`

export const Sidebar = (): JSX.Element => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleClick = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <StyledSidebar container direction="column" xs={1} md={2}>
      <Hidden smDown>
        <StyledAvatar>JS</StyledAvatar>
      </Hidden>

      <Hidden mdUp>
        <StyledButton type="button" onClick={handleClick} aria-label="Open navigation">
          <Icon.Hamburger />
        </StyledButton>
      </Hidden>

      <Grid container component="nav" direction="column" aria-label="Primary">
        <StyledLink href="#" title="Home" active>
          <Icon.Home color={Color.white} />
          <Hidden smDown>Home</Hidden>
        </StyledLink>
        <StyledLink href="#" title="Profile">
          <Icon.User color={Color.white} />
          <Hidden smDown> Profile</Hidden>
        </StyledLink>
        <StyledLink href="#" title="Settings">
          <Icon.Settings color={Color.white} />
          <Hidden smDown>Settings</Hidden>
        </StyledLink>
      </Grid>
    </StyledSidebar>
  )
}
