import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import { Color, Font } from '~/styles'
import { Icon } from '~/components/Icon'

export interface StyledSideNavProps {
  isOpen: boolean
}

export interface SideNavProps extends StyledSideNavProps {
  'data-testid'?: string
  children?: React.ReactNode
  handleClose?(): void
}

const StyledNav = styled.nav<StyledSideNavProps>`
  background-color: ${Color.black};
  border: 4px;
  border-color: ${Color.greyDarkest};
  border-style: none solid none none;
  font-family: ${Font.firaCode};
  height: 100%;
  left: 0;
  transition: transform 0.3s ease-in-out;
}`

const StyledBurgerContainer = styled.nav`
  background-color: ${Color.black};
  border: 4px;
  border-color: ${Color.greyDarkest};
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

const StyledBurger = styled(Icon.Hamburger)<SideNavProps>`
  color: white;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`

export const SideNav = ({ children, ...props }: SideNavProps): JSX.Element => {
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
