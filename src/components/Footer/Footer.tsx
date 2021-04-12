import { styled } from '~/styles/stitches.config'

export const Footer = styled('footer', {
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

Footer.displayName = 'Footer'

export const FooterNav = styled('nav', {
  display: 'grid',
  fontSize: '14px',
  gap: '1rem',

  '@sm': {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

FooterNav.displayName = 'FooterNav'

export const FooterNavLink = styled('a', {
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

FooterNavLink.displayName = 'FooterNavLink'

export const FooterSocial = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between'
})

FooterSocial.displayName = 'FooterSocial'

export const FooterSocialLink = styled('a', {
  color: '$black500',
  cursor: 'pointer',

  '&:hover': {
    color: '$cyan500'
  }
})

FooterSocialLink.displayName = 'FooterSocialLink'
