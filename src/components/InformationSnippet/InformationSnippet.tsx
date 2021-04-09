import React from 'react'
import type { StitchesVariants } from '@stitches/react'
import type { Icon } from 'phosphor-react'

import { styled } from '~/styles/stitches.config'

const InnerContainer = styled('div', {
  marginLeft: '20px',
  fontSize: '18px',
  lineHeight: '$750',
  color: '$grey750'
})

const Span = styled('span', {
  fontWeight: '$bold',
  color: '$white500',

  variants: {
    display: {
      block: {
        display: 'block',
        marginBottom: '$3'
      },
      inline: {
        display: 'inline',
        marginBottom: 0
      }
    }
  }
})

const Container = styled('div', {
  borderBottomColor: '$grey1000',
  borderBottomStyle: 'dashed',
  borderBottomWidth: '2px',
  display: 'flex',
  flexDirection: 'row',
  padding: '$8 0',

  '& svg': {
    alignSelf: 'flex-start'
  },

  [`& ${Span}`]: {
    fontWeight: '$bold',
    color: '$white500'
  },

  variants: {
    direction: {
      column: {
        alignItems: 'center',

        [`& ${Span}`]: {
          display: 'block',
          marginBottom: '$3'
        }
      },
      row: {
        alignItems: 'flex-start',

        [`& ${Span}`]: {
          display: 'inline',
          marginBottom: 0
        }
      }
    }
  }
})

type Props = {
  icon: Icon
  title: string
  details: string
} & StitchesVariants<typeof Container>

export const InformationSnippet: FCWithoutChildren<Props> = ({ icon, title, details, ...props }) => (
  <Container
    direction={{
      '@initial': 'column',
      '@sm': 'row'
    }}
    {...props}
  >
    {icon && React.createElement(icon)}
    <InnerContainer>
      <Span>{title}: </Span>
      {details}
    </InnerContainer>
  </Container>
)
