import React from 'react'
import { styled } from '~/styles/stitches.config'

type LinkProps = {
  active?: boolean
  href?: string
}

type TNavLinkRenderFn = React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<React.FC<LinkProps>>
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

const Root = styled('nav', {})
Root.displayName = 'Nav.Root'

const Link = React.forwardRef(NavLinkRenderFn)
Link.displayName = 'Nav.Link'

const Title = styled('span', { paddingTop: '4px' })
Title.displayName = 'Nav.Title'

export const Nav = {
  Link,
  Root,
  Title
}
