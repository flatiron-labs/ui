import React from 'react'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'
import { H4, P } from '~/components/Typography'
import { Color } from '~/styles'

export interface ContentCardProps {
  children?: React.ReactNode
  cta: string | JSX.Element
  description: string
  title: string
  legend?: string
  secondaryTitle?: string
  secondaryDescription?: string
  onClick?: (e: React.MouseEvent) => void
}

const Container = styled(props => <Grid container alignItems="center" justify="center" {...props} />)`
  padding-bottom: 25px;
  padding-top: 15px;
  position: relative;
`
const StyledGrid = styled(props => <Grid container item xs={12} {...props} />)`
  border: 2px solid ${Color.yellow};
  padding: 5px;
`

const StyledLegend = styled.p`
  position: absolute;
  margin-top: -13px;
  margin-left: 12px;
  background-color: ${Color.black};
  padding-left: 8px;
  padding-right: 8px;
`

const StyledGridItem = styled(props => <Grid xs={12} sm={4} item {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`

export const ContentCard = ({
  cta,
  description,
  title,
  secondaryTitle,
  secondaryDescription,
  legend,
  onClick
}: ContentCardProps): JSX.Element => (
  <Container>
    <StyledGrid>
      {legend && <StyledLegend>{legend}</StyledLegend>}
      <StyledGridItem>
        <H4>{title}</H4>
        <P>{description}</P>
      </StyledGridItem>
      {(secondaryTitle || secondaryDescription) && (
        <StyledGridItem>
          <H4>{secondaryTitle}</H4>
          <P>{secondaryDescription}</P>
        </StyledGridItem>
      )}
      <StyledGridItem alignItems="flex-end">
        {React.isValidElement(cta) ? (
          cta
        ) : (
          <Button style={{ width: '100%', borderColor: Color.turqDark }} lg onClick={onClick}>
            {cta as string}
          </Button>
        )}
      </StyledGridItem>
    </StyledGrid>
  </Container>
)
