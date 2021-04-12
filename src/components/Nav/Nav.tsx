import React from 'react'
import { styled } from '~/styles/stitches.config'

type NavLink = {
  active?: boolean
  href?: string
}

type TNavLinkRenderFn = React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<React.FC<NavLink>>
>

const LinkContainer = styled('a', {
  color: '$white500',
  display: 'flex',
  fontSize: '18px',
  textDecoration: 'none',
  padding: '20px 0 20px 25%',
  justifyContent: 'start',
  cursor: 'pointer',

  '& svg': {
    marginRight: '10px'
  },

  '&:hover': {
    color: '$cyan500',
    background: '$grey1000'
  },

  // TODO: Move
  '@media only screen and (min-width: 601px)': {
    padding: '20px 0 20px 20%',

    '& span': {
      display: 'block'
    }
  },

  variants: {
    active: {
      true: {
        color: '$cyan500',
        backgroundColor: '$grey1000'
      }
    }
  }
})

const NavLinkRenderFn: TNavLinkRenderFn = ({ children, ...props }, ref) => (
  <LinkContainer ref={ref} {...props}>
    {children}
  </LinkContainer>
)

export const Nav = styled('nav', {})
Nav.displayName = 'Nav'

export const NavLink = React.forwardRef(NavLinkRenderFn)
NavLink.displayName = 'NavLink'

export const NavLinkTitle = styled('span', { paddingTop: '4px' })
NavLinkTitle.displayName = 'NavLinkTitle'
