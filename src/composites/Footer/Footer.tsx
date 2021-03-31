import { styled } from '~/styles/stitches.config'

const Root = styled('footer', {
  alignItems: 'center',
  backgroundColor: '$yellow500',
  color: '$black500',
  display: 'grid',
  gap: '3rem',
  gridTemplateColumns: '1fr',
  minHeight: '100px',
  padding: '1rem',
  textAlign: 'center',

  '@sm': {
    gridTemplateColumns: '3fr 1fr',
    textAlign: 'inherit'
  },

  variants: {
    lockToBottom: {
      true: {
        bottom: '0',
        position: 'absolute',
        width: '100%',
        zIndex: '1000'
      }
    }
  }
})

Root.displayName = 'Footer.Root'

const Nav = styled('nav', {
  display: 'grid',
  fontSize: '14px',
  gap: '1rem',

  '@sm': {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

Nav.displayName = 'Footer.Nav'

const NavLink = styled('a', {
  color: '$black500',
  fontWeight: 'bold',
  paddingRight: '1rem',
  textDecoration: 'none',

  '&:last-child': {
    paddingRight: 0
  },

  '&:hover': {
    color: '$cyan500'
  }
})

NavLink.displayName = 'Footer.NavLink'

const Social = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between'
})

Social.displayName = 'Footer.Social'

const SocialLink = styled('a', {
  color: '$black500',
  cursor: 'pointer',

  '&:hover': {
    color: '$cyan500'
  }
})

SocialLink.displayName = 'Footer.SocialLink'

export const Footer = {
  Nav,
  NavLink,
  Root,
  Social,
  SocialLink
}
