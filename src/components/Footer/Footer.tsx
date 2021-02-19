import React from 'react'
import styled from 'styled-components'
import { Grid, Icon, Hidden } from '~/components'
import { Color, Media } from '~/styles'

interface StyledLinkProps {
  active?: boolean
}

const StyledFooter = styled(Grid)`
  background-color: ${Color.yellow};
  color: ${Color.black};
  width: 100%;
  max-height: 100px;
` as typeof Grid

const StyledFooterLink = styled.a<StyledLinkProps>`
  color: ${Color.black};
  font-size: 14px;
  text-decoration: none;
  light-height: 19.2px;
  font-weight: bold;

  &:hover {
    color: ${Color.turq};
  }

  ${Media.md} {
    font-size: 16px;
  }
`

const StyledSocialList = styled(Grid)`
  list-style-type: none;
  padding: 0;
  margin: 0;
` as typeof Grid

const StyledSocialLink = styled.li<StyledLinkProps>`
  padding: 3px;
  cursor: pointer;
`

export const Footer = (): JSX.Element => (
  <StyledFooter container component="footer" alignItems="center" justify="center">
    <Grid item xs={10} sm={10} md={7}>
      <Grid container component="nav" direction="row" justify="space-between" alignItems="center" aria-label="Footer">
        <StyledFooterLink href="https://portal.flatironschool.com/tos">Accessibility</StyledFooterLink>
        <StyledFooterLink href="https://flatironschool.com/accessibility">Terms &amp; Conditions</StyledFooterLink>
        <StyledFooterLink href="https://portal.flatironschool.com/code-of-conduct">Code of Conduct</StyledFooterLink>
        <StyledFooterLink href="https://portal.flatironschool.com/privacy">Privacy Policy</StyledFooterLink>
      </Grid>
    </Grid>

    <Hidden smDown>
      <Grid item xs={3}>
        <StyledSocialList container component="ul" direction="row" alignItems="center">
          <StyledSocialLink>
            <a href="#" title="Facebook">
              <Icon.Github color={Color.black} />
            </a>
          </StyledSocialLink>
          <StyledSocialLink>
            <a href="#" title="Twitter">
              <Icon.Github color={Color.black} />
            </a>
          </StyledSocialLink>
          <StyledSocialLink>
            <a href="#" title="Instagram">
              <Icon.Github color={Color.black} />
            </a>
          </StyledSocialLink>
          <StyledSocialLink>
            <a href="#" title="Github">
              <Icon.Github color={Color.black} />
            </a>
          </StyledSocialLink>
          <StyledSocialLink>
            <a href="#" title="YouTube">
              <Icon.Github color={Color.black} />
            </a>
          </StyledSocialLink>
        </StyledSocialList>
      </Grid>
    </Hidden>
  </StyledFooter>
)
