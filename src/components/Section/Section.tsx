/* eslint-disable react/require-default-props */

import React from 'react'
import { styled } from '~/styles/stitches.config'
import { Icon } from '~/components/Icon'

interface Props extends Partial<typeof Container> {
  title?: string
  children: React.ReactNode
  style?: React.CSSProperties
  dynamic?: boolean
  data?: unknown
  error?: unknown
  minHeight?: string
}

const Container = styled('section', {
  paddingBottom: '3em',
  width: '100%'
})
const Title = styled('h4', { paddingBottom: '0.5em' })
const Content = styled('div', {})
const StatusContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center'
})

export const Section: FC<Props> = ({ title, children, dynamic, data, error, minHeight = '100px', ...props }) => {
  const loading = dynamic && !error && !data

  return (
    <Container aria-busy={loading} {...props}>
      {title && <Title>{title}</Title>}

      <Content css={{ minHeight: minHeight ?? '0' }}>
        {dynamic && error && (
          <StatusContainer>
            <p>failed to load</p>
          </StatusContainer>
        )}

        {loading && (
          <StatusContainer>
            <Icon.LoadingIndicator />
          </StatusContainer>
        )}

        {dynamic && data && children}

        {!dynamic && children}
      </Content>
    </Container>
  )
}
