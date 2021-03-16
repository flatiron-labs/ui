import React from 'react'
import styled from 'styled-components'
import { Grid, Avatar, Icon, Hidden, GridSize } from '~/components'
import { flatironTheme, Media } from '~/styles'

interface StyledLinkProps {
  active?: boolean
  expanded?: boolean
}

const StyledButton = styled.button`
  border-top-style: none;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const StyledSidebar = styled(Grid)`
  border-right: 1px ${flatironTheme.colors.common.greyDarkest} solid;
  padding: 62px 0 0 0;
`

const StyledLink = styled.a<StyledLinkProps>`
  color: ${flatironTheme.colors.common.white};
  display: flex;
  font-size: 19px;
  text-decoration: none;
  padding: 14px 0 15px;
  justify-content: center;
  align-items: center;

  ${props =>
    props.active &&
    `
    color: ${flatironTheme.colors.common.turq};
    background: linear-gradient(to right, ${flatironTheme.colors.common.black}, ${flatironTheme.colors.common.greyDarkest} 12%);
  `}

  &:hover {
    color: ${flatironTheme.colors.common.turq};
    background: linear-gradient(
      to right,
      ${flatironTheme.colors.common.black},
      ${flatironTheme.colors.common.greyDarkest} 12%
    );
  }

  ${props =>
    props.expanded &&
    `
    padding: 14px 0 15px 15%;
    justify-content: start;

    svg {
      margin-right: 10px;
    }
  `}

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

export interface SidebarProps extends StyledLinkProps {
  expanded?: boolean
  onExpand(): void
  lg?: boolean | GridSize
  md?: boolean | GridSize
  sm?: boolean | GridSize
  xs?: boolean | GridSize
}

export const Sidebar = ({ expanded, onExpand, ...props }: SidebarProps): JSX.Element => (
  <StyledSidebar item {...props}>
    <Grid container direction="column">
      <Hidden smDown>
        <StyledAvatar>JS</StyledAvatar>
      </Hidden>

      <Hidden mdUp>
        <StyledButton type="button" onClick={onExpand} aria-label="Open navigation">
          <Icon.Hamburger />
        </StyledButton>
      </Hidden>

      <Grid container component="nav" direction="column" aria-label="Primary">
        <StyledLink href="#" title="Home" expanded={expanded} active>
          <Icon.Home color={flatironTheme.colors.common.white} />
          {expanded ? <>Home</> : <Hidden smDown>Home</Hidden>}
        </StyledLink>
        <StyledLink href="#" expanded={expanded} title="Profile">
          <Icon.User color={flatironTheme.colors.common.white} />
          {expanded ? <>Profile</> : <Hidden smDown> Profile</Hidden>}
        </StyledLink>
        <StyledLink href="#" expanded={expanded} title="Settings">
          <Icon.Settings color={flatironTheme.colors.common.white} />
          {expanded ? <>Settings</> : <Hidden smDown>Settings</Hidden>}
        </StyledLink>
      </Grid>
    </Grid>
  </StyledSidebar>
)
