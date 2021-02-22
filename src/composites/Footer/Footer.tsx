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
  padding: 0 40px;
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
`

const SocialLink = styled.li`
  padding: 3px;
  cursor: pointer;
`

export const Footer = (): JSX.Element => (
  <StyledFooter>
    <Grid item xs={10} sm={10} md={8}>
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
          <SocialLink>
            <a href="#" title="Facebook">
              <Icon.Github color={Color.black} />
            </a>
          </SocialLink>
          <SocialLink>
            <a href="#" title="Twitter">
              <Icon.Github color={Color.black} />
            </a>
          </SocialLink>
          <SocialLink>
            <a href="#" title="Instagram">
              <Icon.Github color={Color.black} />
            </a>
          </SocialLink>
          <SocialLink>
            <a href="#" title="Github">
              <Icon.Github color={Color.black} />
            </a>
          </SocialLink>
          <SocialLink>
            <a href="#" title="YouTube">
              <Icon.Github color={Color.black} />
            </a>
          </SocialLink>
        </SocialLinks>
      </Grid>
    </Hidden>
  </StyledFooter>
)
