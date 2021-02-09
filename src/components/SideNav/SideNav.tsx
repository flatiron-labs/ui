import React, { useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import { HamburgerIcon } from '../../assets/Icons/index'
import { black, greyDarkest } from '../../assets/Styles/colors'
import { Props } from './SideNav.types'

const StyledDiv = styled.div<{ mobileOpen?: boolean; mobile?: boolean }>`
  background-color: ${black};  
  border: 4px;
  border-color: ${greyDarkest};
  border-style: none solid none none;
  font-family: 'Fira Code';
  height: 100%;
  left: 0;
  padding-top: ${props => (props.mobile ? '10px' : '60px')};
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

export const SideNav = ({ children, ...props }: Props): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const windowWidth = useWindowWidth()
  const mobile = windowWidth < 600

  const openSideNav = () => {
    setMobileOpen(true)
  }

  return (
    <StyledDiv {...props} mobile={mobile} mobileOpen={mobileOpen}>
      {(!mobile || (mobileOpen && mobile)) && <> {children} </>}
      {mobile && !mobileOpen && <StyledHamburgerIcon onClick={openSideNav} />}
    </StyledDiv>
  )
}
