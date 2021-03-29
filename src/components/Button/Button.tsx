import { styled } from '~/styles/stitches.config'

export const Button = styled('a', {
  backgroundColor: 'transparent',
  borderColor: '$cyan500',
  borderRadius: '0',
  borderStyle: 'solid',
  borderWidth: '2px',
  cursor: 'pointer',
  display: 'inline-flex',
  fontWeight: 'bold',
  justifyContent: 'center',
  outline: 0,
  textAlign: 'center',
  textDecoration: 'none',
  transition: '$easeInOut',

  variants: {
    appearance: {
      primary: {
        borderColor: '$black500',
        color: '$white500',

        '&:focus, &:hover': {
          borderColor: '$cyan500'
        }
      },

      secondary: {
        borderColor: '$cyan500',
        color: '$white500',

        '&:focus, &:hover': {
          backgroundColor: '$cyan500',
          color: '$black500'
        }
      },

      disabled: {
        borderColor: '$grey1000',
        color: '$grey750',
        cursor: 'not-allowed',

        '&:focus, &:hover': {
          borderColor: '$grey1000',
          backgroundColor: '$black500',
          color: '$grey750'
        }
      }
    },

    size: {
      small: {
        fontSize: '12px',
        padding: '10px 30px'
      },

      medium: {
        fontSize: '14px',
        padding: '12px 40px'
      },

      large: {
        fontSize: '16px',
        padding: '12px 50px'
      }
    },

    width: {
      full: {
        width: '100%'
      },
      auto: {
        justifySelf: 'start',
        width: 'auto'
      }
    }
  },

  defaultVariants: {
    size: 'small',
    appearance: 'secondary',
    width: 'auto'
  }
})
