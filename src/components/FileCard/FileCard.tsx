import React from 'react'
import { styled } from '~/styles/stitches.config'
import { Button } from '~/components/Button'

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

const Legend = styled('div', {
  backgroundColor: '$black500',
  color: '$yellow500',
  fontWeight: 'bold',
  marginTop: '-23px',
  marginLeft: '4px',
  paddingLeft: '8px',
  paddingRight: '8px',
  position: 'absolute'
})

const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

type Props = {
  cta: string
  secondary?: {
    title?: string
    description?: string
  }
  tertiary?: {
    title?: string
    description?: string
  }
  title?: string
  type?: string
} & React.ComponentPropsWithoutRef<'a'>

export const FileCard = React.forwardRef<HTMLAnchorElement, Props>(
  ({ cta, href, onClick, secondary, tertiary, title = 'No Upload', type, ...rest }, ref) => (
    <Container
      direction={{
        '@initial': 'column',
        '@md': 'row'
      }}
      {...{ 'data-testid': rest['data-testid'] }}
    >
      {type && <Legend>{type}</Legend>}

      <Column>
        <h6>{title}</h6>
      </Column>

      <Column>
        {secondary && (
          <>
            <p>{secondary.title}</p>
            <p>{secondary.description}</p>
          </>
        )}
      </Column>

      <Column>
        {tertiary && (
          <>
            <p>{tertiary.title}</p>
            <p>{tertiary.description}</p>
          </>
        )}
      </Column>

      <Column>
        <Button size="large" width="full" href={href} onClick={onClick} ref={ref}>
          {cta}
        </Button>
      </Column>
    </Container>
  )
)

FileCard.displayName = 'FileCard'
