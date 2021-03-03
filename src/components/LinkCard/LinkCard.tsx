import React from 'react'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'
import { Icon } from '~/index'
import { Color } from '~/styles'

export interface LinkCardProps {
  children?: React.ReactNode
  title?: string
  cta?: string | JSX.Element
  backgroundStyle: string
  onClick?: (e: React.MouseEvent) => void
}

const Container = styled(props => (
  <Grid Grid alignItems="center" justify="center" container xs={12} sm={6} md={4} {...props} />
))`
  padding: 10px;
`

const StyledGrid = styled(props => <Grid container item xs={12} {...props} />)`
  border: 2px solid ${props => Color[props.backgroundStyle]};
  display: flex;
  justify-content: center;
`

const StyledText = styled.div`
  padding-top: 30px;
  position: absolute;
  font-family: Gotcha regular;
  font-size: 2.5em;
  width: 250px;
  text-align: center;
`

const StyledButton = styled(Button)<LinkCardProps>`
  border: 2px solid ${props => Color[props.backgroundStyle]};
  margin-top: 10px;
  width: 100%;
  &:focus,
  &:hover {
    border-color: ${Color.black};
    background-color: ${props => Color[props.backgroundStyle]};
    color: ${Color.black};
    outline: 0;
  }
`

export const LinkCard = ({ cta, title, backgroundStyle, onClick }: LinkCardProps): JSX.Element => (
  <Container>
    <StyledGrid backgroundStyle={backgroundStyle}>
      {backgroundStyle === 'red' && (
        <Icon.PinkOverlay style={{ paddingTop: '20px' }}>
          <StyledText>{title}</StyledText>
        </Icon.PinkOverlay>
      )}
      {backgroundStyle === 'turq' && (
        <Icon.BlueOverlay style={{ paddingTop: '20px' }}>
          <StyledText>{title}</StyledText>
        </Icon.BlueOverlay>
      )}
      {backgroundStyle === 'purple' && (
        <Icon.PurpleOverlay style={{ paddingTop: '20px' }}>
          <StyledText>{title}</StyledText>
        </Icon.PurpleOverlay>
      )}
      {backgroundStyle === 'yellow' && (
        <Icon.YellowOverlay style={{ paddingTop: '20px' }}>
          <StyledText>{title}</StyledText>
        </Icon.YellowOverlay>
      )}
    </StyledGrid>
    <Grid item xs={12}>
      {React.isValidElement(cta) ? (
        cta
      ) : (
        <StyledButton onClick={onClick} backgroundStyle={backgroundStyle}>
          {cta as string}
        </StyledButton>
      )}{' '}
    </Grid>
  </Container>
)
