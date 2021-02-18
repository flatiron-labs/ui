import React, { useState } from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'
import { Grid, Icon, Toggle } from '~/components'
import { Color } from '~/styles'

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
`

interface StyledLinkProps {
  active?: boolean
}

const StyledLink = styled.a<StyledLinkProps>`
  color: ${Color.white};
  display: flex;
  font-size: 19px;
  text-decoration: none;
  padding: 14px 0 15px 15%;
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

  svg {
    margin-right: 10px;
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

  &:hover {
    color: ${Color.turq};
    background-color: ${Color.greyDarkest};
  }
`

const Template: Story = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleClick = event => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid container wrap="nowrap">
        <StyledSidebar container direction="column" xs={2}>
          <StyledButton type="button" onClick={handleClick}>
            <Icon.Hamburger />
          </StyledButton>

          <Grid container component="nav" direction="column">
            <StyledLink href="#" active>
              <Icon.Home color={Color.white} />
              Home
            </StyledLink>
            <StyledLink href="#">
              <Icon.User color={Color.white} />
              Profile
            </StyledLink>
            <StyledLink href="#">
              <Icon.Settings color={Color.white} />
              Settings
            </StyledLink>
          </Grid>
        </StyledSidebar>

        <Grid container xs={10}>
          <Toggle label="Side 1" />
          <Toggle label="Side 2" />
        </Grid>
      </Grid>

      <StyledFooter container component="footer">
        <Grid container component="nav" direction="row" justify="space-between" alignItems="center">
          <StyledFooterLink href="#">Accessibility</StyledFooterLink>
          <StyledFooterLink href="#">Terms &amp; Conditions</StyledFooterLink>
          <StyledFooterLink href="#">Code of Conduct</StyledFooterLink>
          <StyledFooterLink href="#">Privacy Policy</StyledFooterLink>
        </Grid>

        {/* <Grid container component="ul" direction="row">

        </Grid> */}
      </StyledFooter>
    </Grid>
  )
}

export const Default = Template.bind({})
