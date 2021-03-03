import React from 'react'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'
import { Icon } from '~/index'
import { Color } from '~/styles'

type BackgroundType = 'turq' | 'red' | 'yellow' | 'purple'

export interface OverlayCardProps {
  children?: React.ReactNode
  title?: string
  cta?: string | JSX.Element
  background: BackgroundType
  onClick?: (e: React.MouseEvent) => void
}

const Container = styled(props => (
  <Grid Grid alignItems="center" justify="center" container xs={12} sm={6} md={4} {...props} />
))`
  padding: 10px;
`

const StyledGrid = styled(props => <Grid container item xs={12} {...props} />)`
  border: 2px solid ${props => Color[props.background]};
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

const StyledButton = styled(Button)<OverlayCardProps>`
  border: 2px solid ${props => Color[props.background]};
  margin-top: 10px;
  width: 100%;
  &:focus,
  &:hover {
    border-color: ${Color.black};
    background-color: ${props => Color[props.background]};
    color: ${Color.black};
    outline: 0;
  }
`

export const OverlayCard = ({ cta, title, background, onClick }: OverlayCardProps): JSX.Element => {
  const componentMap = {
    turq: Icon.BlueOverlay,
    red: Icon.PinkOverlay,
    yellow: Icon.YellowOverlay,
    purple: Icon.PurpleOverlay
  }
  const Overlay = componentMap[background]

  return (
    <Container>
      <StyledGrid background={background}>
        <Overlay style={{ paddingTop: '20px' }} />
        <StyledText>{title}</StyledText>
      </StyledGrid>
      <Grid item xs={12}>
        {React.isValidElement(cta) ? (
          cta
        ) : (
          <StyledButton onClick={onClick} background={background}>
            {cta as string}
          </StyledButton>
        )}
      </Grid>
    </Container>
  )
}
