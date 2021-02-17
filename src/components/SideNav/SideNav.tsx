import React, { useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import colors from '~/styles/colors'
import font from '~/styles/typography'
import { Icon } from '..'

export interface StyledSideNavProps {
  isMobile: boolean
  mobileOpen: boolean
}

export interface SideNavProps extends StyledSideNavProps {
  'data-testid'?: string
  children?: React.ReactNode
  closed?: boolean
  handleClose?(): void
}

const StyledNav = styled.nav<StyledSideNavProps>`
  background-color: ${colors.black};
  border: 4px;
  border-color: ${colors.greyDarkest};
  border-style: none solid none none;
  font-family: ${font.firaCode};
  height: 100%;
  left: 0;
  padding-top: ${props => (props.isMobile ? '10px' : '60px')};
  position: fixed;
  top: 0;
  width: 195px;
  ${props =>
    props.mobileOpen &&
    `
    @media (max-width: 600px) {
        width: 100%;
    }
  `}
  ${props =>
    !props.mobileOpen &&
    `
  @media (max-width: 600px) {
      width: 40px;
  }
`}
}`

const StyledHamburgerIcon = styled(Icon.Hamburger)`
  padding-left: 9px;
}
`

export const SideNav = ({ children, ...props }: SideNavProps): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const windowWidth = useWindowWidth()
  const isMobile = windowWidth < 600

  const openSideNav = () => {
    setMobileOpen(true)
  }

  return (
    <StyledNav {...props} isMobile={isMobile} mobileOpen={mobileOpen}>
      {(!isMobile || (mobileOpen && isMobile)) && <>{children}</>}
      {isMobile && !mobileOpen && <StyledHamburgerIcon onClick={openSideNav} />}
    </StyledNav>
  )
}
