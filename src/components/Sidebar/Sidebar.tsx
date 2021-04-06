import React from 'react'
import { styled } from '~/styles/stitches.config'

interface Props {
  children: JSX.Element
  expanded: boolean
}

// TODO: Swap to CSS Grid
const Container = styled('div', {
  backgroundColor: '$black500',
  borderRight: '1px solid $grey1000',
  flexDirection: 'column',
  minHeight: '99%',
  overflowX: 'auto',
  padding: '30px 0 0 0',
  position: 'absolute',
  transition: 'width 150ms, height 150ms, transform 150ms ease-in-out',
  zIndex: 555,

  variants: {
    expanded: {
      true: {
        width: '250px'
      },
      false: {
        width: '0px'
      }
    }
  }

  // ${Media.md} {
  //   width: 250px !important;
  //   display: flex !important;
  // }
})

// TODO: New way to expand
export const Sidebar: FC<Props> = ({ children, expanded, ...props }) => (
  <Container expanded={expanded} {...props}>
    {children}
  </Container>
)
