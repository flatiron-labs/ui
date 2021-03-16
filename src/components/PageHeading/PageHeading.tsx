import React from 'react'
import styled from 'styled-components'
import { flatironTheme } from '~/styles'

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

const Highlight = styled.span`
  color: ${flatironTheme.colors.common.yellow};
  display: inline-block;
  padding-right: 25px;
`

export const PageHeading = ({ title, subtitle, secondarySubtitle }: PageHeadingProps): JSX.Element => {
  const hasSubheader = subtitle || secondarySubtitle

  return (
    <>
      <Header noSubheader={!hasSubheader}>{title}</Header>

      {hasSubheader && (
        <h5>
          {subtitle && <Highlight>{subtitle}</Highlight>}
          {secondarySubtitle}
        </h5>
      )}
    </>
  )
}
