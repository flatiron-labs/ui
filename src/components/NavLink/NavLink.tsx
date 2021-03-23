import React from 'react'
import styled from 'styled-components'
import { Icon, useTheme } from '~/index'
import { Media, Theme } from '~/styles'

type StyledNavLinkProps = {
  active?: boolean
  theme?: Theme
}

export type NavLinkProps = {
  icon: string
  href?: string
} & StyledNavLinkProps

type TNavLinkRenderFn = React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<React.FC<NavLinkProps>>
>

const StyledNavLink = styled.a<StyledNavLinkProps>`
  color: ${props => props.theme.colors.common.white};
  display: flex;
  font-size: 18px;
  text-decoration: none;
  padding: 20px 0 20px 25%;
  justify-content: start;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
  span {
    padding-top: 4px;
  }

  &:hover {
    color: ${props => props.theme.colors.common.turq};
    background: ${props => props.theme.colors.common.greyDarkest};
  }

  ${Media.md} {
    padding: 20px 0 20px 20%;
    span {
      display: block;
    }
  }

  ${props =>
    props.active &&
    `
    color: ${props.theme.colors.common.turq};
    background: ${props.theme.colors.common.greyDarkest};
  `}
`

const NavLinkRenderFn: TNavLinkRenderFn = ({ children, icon, ...props }, ref) => {
  const SelectedIcon = Icon[icon]
  const theme = useTheme()

  return (
    <StyledNavLink ref={ref} theme={theme} {...props}>
      <SelectedIcon />
      <span>{children}</span>
    </StyledNavLink>
  )
}

export const NavLink = React.forwardRef(NavLinkRenderFn)
