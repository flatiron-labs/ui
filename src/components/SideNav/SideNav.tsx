import React, { useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import colors from '~/styles/colors'
import font from '~/styles/typography'
import HamburgerIcon from '../Icons/Hamburger'
import { Props } from './SideNav.types'

const StyledNav = styled.nav<{ mobileOpen?: boolean; isMobile?: boolean }>`
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

const StyledHamburgerIcon = styled(HamburgerIcon)`
  padding-left: 9px;
}
`

const SideNav = ({ children, ...props }: Props): JSX.Element => {
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

export default SideNav
