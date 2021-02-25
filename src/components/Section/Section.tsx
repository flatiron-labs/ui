import React from 'react'
import styled from 'styled-components'
import { H4 } from '~/components/Typography'

export interface SectionProps {
  title: string
  children: React.ReactNode
  style?: React.CSSProperties
}

const StyledSection = styled.section`
  padding-top: 4em;
`

const StyledContent = styled.div`
  margin-top: 1em;
`

export const Section = ({ title, children, ...props }: SectionProps): JSX.Element => (
  <StyledSection {...props}>
    <H4>{title}</H4>

    <StyledContent>{children}</StyledContent>
  </StyledSection>
)
