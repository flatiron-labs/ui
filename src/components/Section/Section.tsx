import React from 'react'
import styled from 'styled-components'
import { Grid, Heading } from '~/components'

export interface SectionProps {
  title: string
  children: React.ReactNode
  style?: React.CSSProperties
}

const StyledSection = styled(rest => <Grid container direction="column" component="section" {...rest} />)`
  padding-top: 60px;
`

export const Section = ({ title, children, ...props }: SectionProps): JSX.Element => (
  <StyledSection {...props}>
    <Heading h4>{title}</Heading>
    {children}
  </StyledSection>
)
