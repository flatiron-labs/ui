import React, { useState } from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'
import { Grid, Icon, Toggle, Hidden, Avatar } from '~/components'
import { Color, Media } from '~/styles'

export default {
  title: 'Examples/Page'
} as Meta

// https://material-ui.com/components/grid/

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

interface StyledLinkProps {
  active?: boolean
}

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

const StyledFooter = styled(Grid)`
  background-color: ${Color.yellow};
  max-height: 100px;
  color: ${Color.black};
  width: 100%;
` as typeof Grid

const StyledFooterNav = styled(Grid)`
  background-color: ${Color.yellow};
  max-height: 100px;
  color: ${Color.black};
  width: 100%;
` as typeof Grid

const StyledFooterLink = styled.a<StyledLinkProps>`
  color: ${Color.black};
  font-size: 16px;
  text-decoration: none;
  light-height: 19.2px;
  font-weight: bold;

  &:hover {
    color: ${Color.turq};
  }
`

const StyledSocialLink = styled.a<StyledLinkProps>`
  padding: 3px;
`

const StyledAvatar = styled(Avatar)`
  margin: 0 auto 40px;
`

const Template: Story = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleClick = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid container style={{ minHeight: '100vh' }}>
      {/* MAIN CONTENT */}
      <Grid container wrap="nowrap">
        {/* SIDEBAR */}
        <StyledSidebar container direction="column" xs={1} md={2}>
          <Hidden smDown>
            <StyledAvatar>JS</StyledAvatar>
          </Hidden>

          <Hidden mdUp>
            <StyledButton type="button" onClick={handleClick}>
              <Icon.Hamburger />
            </StyledButton>
          </Hidden>

          <Grid container component="nav" direction="column">
            <StyledLink href="#" active>
              <Icon.Home color={Color.white} />
              <Hidden smDown>Home</Hidden>
            </StyledLink>
            <StyledLink href="#">
              <Icon.User color={Color.white} />
              <Hidden smDown> Profile</Hidden>
            </StyledLink>
            <StyledLink href="#">
              <Icon.Settings color={Color.white} />
              <Hidden smDown>Settings</Hidden>
            </StyledLink>
          </Grid>
        </StyledSidebar>

        {/* PAGE-SPECIFIC CONTENT */}
        <Grid container style={{ padding: '62px 40px 0' }}>
          <Grid item xs={12}>
            <Grid container direction="row" justify="space-between">
              <Grid item>
                <p>Header</p>
              </Grid>

              <Grid item>
                <Toggle label="new student home experience" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* FOOTER */}
      <StyledFooter container component="footer" alignItems="center" justify="center" spacing={1}>
        <Grid item xs={7}>
          <Grid container component="nav" direction="row" justify="space-between" alignItems="center">
            <StyledFooterLink href="https://portal.flatironschool.com/tos">Accessibility</StyledFooterLink>
            <StyledFooterLink href="https://flatironschool.com/accessibility">Terms &amp; Conditions</StyledFooterLink>
            <StyledFooterLink href="https://portal.flatironschool.com/code-of-conduct">
              Code of Conduct
            </StyledFooterLink>
            <StyledFooterLink href="https://portal.flatironschool.com/privacy">Privacy Policy</StyledFooterLink>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid container component="ul" direction="row" alignItems="center">
            <StyledSocialLink href="#">
              <Icon.Github color={Color.black} />
            </StyledSocialLink>
            <StyledSocialLink href="#">
              <Icon.Github color={Color.black} />
            </StyledSocialLink>
            <StyledSocialLink href="#">
              <Icon.Github color={Color.black} />
            </StyledSocialLink>
            <StyledSocialLink href="#">
              <Icon.Github color={Color.black} />
            </StyledSocialLink>
            <StyledSocialLink href="#">
              <Icon.Github color={Color.black} />
            </StyledSocialLink>
          </Grid>
        </Grid>
      </StyledFooter>
    </Grid>
  )
}

export const Default = Template.bind({})
