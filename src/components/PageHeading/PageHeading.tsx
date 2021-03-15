import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'

export interface PageHeadingProps {
  title: string
  subtitle?: string
  secondarySubtitle?: string
}

const marginBottom = '2.5em'

const Header = styled.h1<{ noSubheader?: boolean }>`
  font-size: 2.5rem;
  ${props =>
    props.noSubheader &&
    `
    margin-bottom: ${marginBottom};
  `}
`

const Subheader = styled.p`
  color: ${Color.white};
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: ${marginBottom};
`

const Highlight = styled.span`
  color: ${Color.yellow};
  display: inline-block;
  padding-right: 25px;
`

export const PageHeading = ({ title, subtitle, secondarySubtitle }: PageHeadingProps): JSX.Element => {
  const hasSubheader = subtitle || secondarySubtitle

  return (
    <>
      <Header noSubheader={!hasSubheader}>{title}</Header>

      {hasSubheader && (
        <Subheader>
          {subtitle && <Highlight>{subtitle}</Highlight>}
          {secondarySubtitle}
        </Subheader>
      )}
    </>
  )
}
