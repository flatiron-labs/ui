import React from 'react'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'
import { flatironTheme } from '~/styles'

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
  border: 2px solid ${flatironTheme.colors.common.greyDarkest};
  padding: 5px 20px;
`

const StyledLegend = styled.div`
  position: absolute;
  margin-top: -13px;
  margin-left: 4px;
  color: ${flatironTheme.colors.common.yellow};
  background-color: ${flatironTheme.colors.common.black};
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
        {title ? <h6>{title}</h6> : <h6>No Upload</h6>}
      </StyledGridItem>
      {(secondaryTitle || secondaryDescription) && (
        <StyledGridItem container item sm={12} md={tertiaryTitle ? 2 : 4} {...props}>
          <p>{secondaryTitle}</p>
          <p>{secondaryDescription}</p>
        </StyledGridItem>
      )}
      {(tertiaryTitle || tertiaryDescription) && (
        <StyledGridItem container item sm={12} md={tertiaryTitle ? 2 : 4} {...props}>
          <p>{tertiaryTitle}</p>
          <p>{tertiaryDescription}</p>
        </StyledGridItem>
      )}
      <StyledGridItem container item sm={12} md={4} {...props} alignItems="flex-end">
        {React.isValidElement(cta) ? (
          cta
        ) : (
          <Button size="large" width="full" onClick={onClick}>
            {cta as string}
          </Button>
        )}
      </StyledGridItem>
    </StyledGrid>
  </Container>
)
