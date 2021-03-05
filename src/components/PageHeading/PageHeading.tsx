import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'
import { H1, P } from '../Typography'

export interface PageHeadingProps {
  header: string
  subheader: string
  secondarySubheader?: string
}

const Subheader = styled(P)`
  color: ${Color.white};
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
`

const Highlight = styled.span`
  color: ${Color.yellow};
  display: inline-block;
  padding-right: 25px;
  margin-bottom: 2.5em;
`

export const PageHeading = ({ header, subheader, secondarySubheader }: PageHeadingProps): JSX.Element => (
  <>
    <H1>{header}</H1>
    <Subheader>
      <Highlight>{subheader}</Highlight>
      {secondarySubheader}
    </Subheader>
  </>
)
