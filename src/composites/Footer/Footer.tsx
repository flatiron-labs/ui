import React from 'react'
import styled from 'styled-components'
import { Grid, Hidden, Icon } from '~/components'
import { Color, Media } from '~/styles'

const StyledFooter = styled(rest => <Grid container component="footer" {...rest} />)`
  background-color: ${Color.yellow};
  color: ${Color.black};
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  ${Media.md} {
    justify-content: space-between;
    padding: 0 5rem;
  }
`

const FooterLink = styled.a`
  color: ${Color.black};
  font-size: 14px;
  padding: 7px 0;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${Color.turq};
  }

  ${Media.md} {
    font-size: 16px;
  }
`

const SocialLinks = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  align-items: center;
  direction: row;
  justify-content: flex-end;

  a {
    color: black;
  }

  li {
    padding-left: 1em;
    cursor: pointer;

    &:first-child {
      padding-left: 0;
    }
  }
`

export const Footer = (): JSX.Element => (
  <StyledFooter spacing={1}>
    <Grid item xs={10} sm={10} md={9}>
      <Grid container component="nav" direction="row" justify="space-between" alignItems="center" aria-label="Footer">
        <FooterLink href="https://portal.flatironschool.com/tos">Accessibility</FooterLink>
        <FooterLink href="https://flatironschool.com/accessibility">Terms &amp; Conditions</FooterLink>
        <FooterLink href="https://portal.flatironschool.com/code-of-conduct">Code of Conduct</FooterLink>
        <FooterLink href="https://portal.flatironschool.com/privacy">Privacy Policy</FooterLink>
      </Grid>
    </Grid>

    <Hidden smDown>
      <Grid item xs={2}>
        <SocialLinks aria-label="Social links">
          <li>
            <a href="#" title="Facebook">
              <Icon.Facebook />
            </a>
          </li>
          <li>
            <a href="#" title="Twitter">
              <Icon.Twitter />
            </a>
          </li>
          <li>
            <a href="#" title="Instagram">
              <Icon.Instagram />
            </a>
          </li>
          <li>
            <a href="#" title="Github">
              <Icon.Github />
            </a>
          </li>
          <li>
            <a href="#" title="YouTube">
              <Icon.Youtube />
            </a>
          </li>
        </SocialLinks>
      </Grid>
    </Hidden>
  </StyledFooter>
)
