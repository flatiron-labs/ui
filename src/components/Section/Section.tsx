import React from 'react'
import styled from 'styled-components'
import { Heading } from '~/components/Heading'

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
    <Heading h4>{title}</Heading>

    <StyledContent>{children}</StyledContent>
  </StyledSection>
)
