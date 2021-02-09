import React, { useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth, DebouncedWindowSizeOptions } from '@react-hook/window-size'
import { ReactComponent as Hamburger } from '../../assets/Icons/hamburger.svg'
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

const StyledHamburger = styled(Hamburger)`
  padding-left: 9px;
}
`

export const SideNav = ({ children }: Props): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const windowWidthOptions: DebouncedWindowSizeOptions = {
    wait: 0,
    leading: false
  }
  const windowWidth = useWindowWidth(windowWidthOptions)
  const mobile = windowWidth < 600

  const openSideNav = () => {
    setMobileOpen(true)
  }

  return (
    <StyledDiv mobile={mobile} mobileOpen={mobileOpen}>
      {(!mobile || (mobileOpen && mobile)) && <>{children}</>}
      {mobile && !mobileOpen && <StyledHamburger onClick={openSideNav} />}
    </StyledDiv>
  )
}
