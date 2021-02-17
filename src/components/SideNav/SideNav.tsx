import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import colors from '~/styles/colors'
import font from '~/styles/typography'
import { Props } from './SideNav.types'
import { Hamburger } from '../Icons'

const StyledNav = styled.nav<Props>`
  background-color: ${colors.black};
  border: 4px;
  border-color: ${colors.greyDarkest};
  border-style: none solid none none;
  font-family: ${font.firaCode};
  display: flex;
  flex-direction: column;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  position: absolute;
  padding-top: 50px;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
}`

const StyledBurgerContainer = styled.nav`
  background-color: ${colors.black};
  border: 4px;
  border-color: ${colors.greyDarkest};
  border-style: none solid none none;
  display: flex;
  justify-content: center;
  height: 100vh;
  position: absolute;
  padding-top: 10px;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 60px;
}`

const StyledBurger = styled(Hamburger)<Props>`
  color: white;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`

const SideNav = ({ children, ...props }: Props): JSX.Element => {
  const [isOpen, setOpen] = useState(true)
  const windowWidth = useWindowWidth()

  useEffect(() => {
    if (windowWidth < 600 === true) {
      setOpen(false)
    }
    if (windowWidth < 600 === false) {
      setOpen(true)
    }
  }, [windowWidth, isOpen])

  const openSideNav = () => {
    setOpen(isOpen ?? false)
  }

  return (
    <>
      {!isOpen && (
        <StyledBurgerContainer>
          <StyledBurger onClick={openSideNav} isOpen={isOpen} />
        </StyledBurgerContainer>
      )}
      <StyledNav {...props} isOpen={isOpen}>
        {isOpen && <>{children}</>}
      </StyledNav>
    </>
  )
}

export default SideNav
