import React from 'react'
import styled from 'styled-components'
import { Button, Grid, Heading } from '~/index'
import { Color } from '~/styles'

export interface ContentCardProps {
  children?: React.ReactNode
  cta?: string | JSX.Element
  description?: string
  title?: string
  legend?: string
  middleTitle?: string
  middleDescription?: string
  onClick?: (e: React.MouseEvent) => void
}

const Container = styled(props => <Grid container alignItems="center" justify="center" {...props} />)`
  padding-bottom: 25px;
  padding-top: 15px;
`
const StyledGrid = styled(props => <Grid container item xs={12} {...props} />)`
  border: 2px solid ${Color.yellow};
  padding: 5px;
`

const StyledLegned = styled.p`
  margin-top: -15px;
  margin-left: 8px;
  background-color: ${Color.black};
  padding-left: 8px;
  padding-right: 8px;
`

const StyledText = styled.div`
  padding-top: 10px;
`

const StyledGridItem = styled(props => <Grid xs={12} sm={4} item {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.end ? 'flex-end' : 'flex-start')};
  padding-bottom: 10px;
`

export const ContentCard = ({
  cta,
  description,
  title,
  middleTitle,
  middleDescription,
  legend,
  onClick
}: ContentCardProps): JSX.Element => (
  <Container>
    <StyledGrid>
      <Grid container>
        <StyledLegned>{legend}</StyledLegned>
      </Grid>
      <StyledGridItem>
        <Heading bold h4>
          {title}
        </Heading>
        <StyledText>{description}</StyledText>
      </StyledGridItem>
      <StyledGridItem>
        <Heading bold h4>
          {middleTitle}
        </Heading>
        <StyledText>{middleDescription}</StyledText>
      </StyledGridItem>

      <StyledGridItem end="true">
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
