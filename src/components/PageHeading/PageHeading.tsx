import React from 'react'
import styled from 'styled-components'
import { flatironTheme } from '~/styles'

export interface PageHeadingProps {
  title: string
  subtitle?: string
  secondarySubtitle?: string
}

const marginBottom = '2em'

const Header = styled.h1<{ noSubheader?: boolean }>`
  font-size: 2rem;
  margin: 0;
  font-weight: 500;
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

const Container = styled.div<{ noSubheader?: boolean }>`
  ${props =>
    !props.noSubheader &&
    `
  margin-bottom: ${marginBottom};
`}
`

const SubTitleContainer = styled.div`
  font-size: 1.3rem;
`

export const PageHeading = ({ title, subtitle, secondarySubtitle }: PageHeadingProps): JSX.Element => {
  const hasSubheader = subtitle || secondarySubtitle

  return (
    <Container>
      <Header noSubheader={!hasSubheader}>{title}</Header>

      {hasSubheader && (
        <SubTitleContainer>
          {subtitle && <Highlight>{subtitle}</Highlight>}
          {secondarySubtitle}
        </SubTitleContainer>
      )}
    </Container>
  )
}
