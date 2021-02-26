import React from 'react'
import styled from 'styled-components'

import { H4, P } from '~/components/Typography'
import { Spinner } from '~/components/Spinner'

export interface Content {
  minHeight?: string
}

export interface SectionProps extends Content {
  title?: string
  children: React.ReactNode
  style?: React.CSSProperties
  dynamic?: boolean
  data?: unknown
  error?: unknown
}

const StyledSection = styled.section`
  padding-top: 4em;
`

const Content = styled.div<Content>`
  margin-top: 1em;
  ${props => props.minHeight && `min-height: ${props.minHeight};`}
`

const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Section = ({
  title,
  children,
  dynamic,
  data,
  error,
  minHeight = '100px',
  ...props
}: SectionProps): JSX.Element => (
  <StyledSection {...props}>
    {title && <H4>{title}</H4>}

    <Content minHeight={minHeight}>
      {dynamic && error && (
        <StatusContainer>
          <P>failed to load</P>
        </StatusContainer>
      )}

      {dynamic && !error && !data && (
        <StatusContainer>
          <Spinner />
        </StatusContainer>
      )}

      {dynamic && data && children}

      {!dynamic && children}
    </Content>
  </StyledSection>
)
