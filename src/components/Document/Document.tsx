import React from 'react'

import { Heading } from '~/components/Typography/Heading'
import { Level } from '~/components/Level'
import { styled } from '~/styles/stitches.config'

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/

const Container = styled('div', {
  border: '2px solid $grey1000',
  padding: '15px 30px',
  display: 'grid',
  gridGap: '$7',

  variants: {
    direction: {
      column: {
        gridTemplateColumns: '1fr'
      },
      row: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'
      }
    }
  }
})

/* -------------------------------------------------------------------------------------------------
 * DocumentLegend
 * -----------------------------------------------------------------------------------------------*/

export const DocumentLegend = styled('div', {
  backgroundColor: '$black500',
  color: '$yellow500',
  fontWeight: 'bold',
  marginTop: '-23px',
  marginLeft: '4px',
  paddingLeft: '8px',
  paddingRight: '8px',
  position: 'absolute'
})

/* -------------------------------------------------------------------------------------------------
 * DocumentColumn
 * -----------------------------------------------------------------------------------------------*/

export const DocumentColumn = styled('div', {
  fontFamily: '$firaCode',
  fontWeight: '$regular',
  fontSize: '$30',
  lineHeight: '1.9rem',
  letterSpacing: '0.00938em'
})

/* -------------------------------------------------------------------------------------------------
 * DocumentTitle
 * -----------------------------------------------------------------------------------------------*/

export const DocumentTitle = styled(Heading, {
  alignItems: 'center',
  display: 'flex',
  fontFamily: '$firaCode',
  fontWeight: '$medium',
  fontSize: '$40',
  letterSpacing: '0.0075em'
})

/* -------------------------------------------------------------------------------------------------
 * Document
 * -----------------------------------------------------------------------------------------------*/

type Props = React.ComponentPropsWithRef<typeof Container>

export const Document = React.forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => (
  <Level>
    <Container
      direction={{
        '@initial': 'column',
        '@md': 'row'
      }}
      {...rest}
      ref={ref}
    >
      {children}
    </Container>
  </Level>
))

Document.displayName = 'Document'
