import React from 'react'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Grid } from '~/components/Grid'
import { Color, Font } from '~/styles'

export type OverlayCardAccentProps = 'turq' | 'pink' | 'yellow' | 'purple'

export interface OverlayCardBaseProps {
  accent: string
}

export interface OverlayCardTopProps extends OverlayCardBaseProps {
  image: string
}

export interface OverlayCardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    OverlayCardTopProps {
  accent: OverlayCardAccentProps
  title?: string
  cta?: string | JSX.Element
}

const Container = styled(props => (
  <Grid alignItems="center" justify="center" container item xs={12} sm={6} md={4} {...props} />
))`
  padding: 10px;
`

const StyledButton = styled(Button)<OverlayCardBaseProps>`
  border: 2px solid ${props => Color[props.accent]};
  margin-top: 10px;
  width: 100%;

  &:focus,
  &:hover {
    border-color: ${Color.black};
    background-color: ${props => Color[props.accent]};
    color: ${Color.black};
    outline: 0;
  }
`

const Top = styled.div<OverlayCardTopProps>`
  border: 2px solid ${props => Color[props.accent]};
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 125px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: 100% 80%;
  background-position: bottom center;
  padding: 20px 15px 0;

  p {
    font-family: ${Font.gotcha};
    font-size: 2.5em;
    width: 100%;
    text-align: center;
    text-shadow: 3px 3px 1px ${Color.black};
  }
`

export const OverlayCard = ({ cta, title, image, accent, onClick, ...props }: OverlayCardProps): JSX.Element => (
  <Container {...props}>
    <Top accent={accent} image={image}>
      <p>{title}</p>
    </Top>
    <Grid item xs={12}>
      {React.isValidElement(cta) ? (
        cta
      ) : (
        <StyledButton onClick={onClick} accent={accent} md>
          {cta as string}
        </StyledButton>
      )}
    </Grid>
  </Container>
)
