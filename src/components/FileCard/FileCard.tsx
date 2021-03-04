import React from 'react'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'
import { H4, P } from '~/components/Typography'
import { Color } from '~/styles'

export interface FileCardProps {
  children?: React.ReactNode
  cta: string | JSX.Element
  title?: string
  type?: string
  secondaryTitle?: string
  secondaryDescription?: string
  tertiaryTitle?: string
  tertiaryDescription?: string
  onClick?: (e: React.MouseEvent) => void
}

const Container = styled(props => <Grid container alignItems="center" justify="center" {...props} />)`
  padding-bottom: 25px;
  padding-top: 15px;
  position: relative;
`
const StyledGrid = styled(props => <Grid container item {...props} />)`
  border: 2px solid ${Color.greyDarkest};
  padding: 5px 20px;
`

const StyledLegend = styled.p`
  position: absolute;
  margin-top: -13px;
  margin-left: 4px;
  color: ${Color.yellow};
  background-color: ${Color.black};
  padding-left: 8px;
  padding-right: 8px;
  font-weight: bold;
`

const StyledGridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`

export const FileCard = ({
  cta,
  title,
  type,
  secondaryTitle,
  secondaryDescription,
  tertiaryTitle,
  tertiaryDescription,
  onClick,
  ...props
}: FileCardProps): JSX.Element => (
  <Container>
    <StyledGrid>
      {type && <StyledLegend>{type}</StyledLegend>}
      <StyledGridItem container item sm={12} md={4} {...props}>
        {title ? <H4>{title}</H4> : <H4>No Upload</H4>}
      </StyledGridItem>
      {(secondaryTitle || secondaryDescription) && (
        <StyledGridItem container item sm={12} md={tertiaryTitle ? 2 : 4} {...props}>
          <P>{secondaryTitle}</P>
          <P>{secondaryDescription}</P>
        </StyledGridItem>
      )}
      {(tertiaryTitle || tertiaryDescription) && (
        <StyledGridItem container item sm={12} md={tertiaryTitle ? 2 : 4} {...props}>
          <P>{tertiaryTitle}</P>
          <P>{tertiaryDescription}</P>
        </StyledGridItem>
      )}
      <StyledGridItem container item sm={12} md={4} {...props} alignItems="flex-end">
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
