/* eslint-disable react/require-default-props */

import React from 'react'
import { Button } from '~/components/Button'
import { styled, CSS, resolveTokens } from '~/styles/stitches.config'

// const Container = styledComp(props => (
//   <Grid alignItems="center" justify="center" container item xs={12} sm={6} md={4} {...props} />
// ))`
//   padding: 10px;
// `

// const StyledButton = styledComp(Button)<OverlayCardBaseProps>`
//   border: 2px solid ${props => flatironTheme.colors.common[props.accent]};
//   margin-top: 10px;
//   width: 100%;

//   &:focus,
//   &:hover {
//     border-color: ${flatironTheme.colors.common.black};
//     background-color: ${props => flatironTheme.colors.common[props.accent]};
//     color: ${flatironTheme.colors.common.black};
//     outline: 0;
//   }
// `

const Top = styled('div', {
  borderStyle: 'solid',
  borderWidth: '2px',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '130px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '20px 15px 0'
})

const Bottom = styled('div', {
  marginTop: '10px'
})

const Title = styled('div', {
  fontFamily: '$gotcha',
  fontSize: '2.5em',
  width: '100%',
  textAlign: 'center',
  textShadow: '3px 3px 1px $black500'
})

// const Container = styledComp(props => (
//   <Grid alignItems="center" justify="center" container item xs={12} sm={6} md={4} {...props} />
// ))`
//   padding: 10px;
// `

const Container = styled('div', {})

//  interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
type Props = {
  // accentColor: typeof resolveOptions<'colors'> // '$cyan500' | '$pink500' | '$yellow500' | '$purple500'
  // accentColor: keyof typeof config.theme.colors // '$cyan500' | '$pink500' | '$yellow500' | '$purple500'
  accentColor: resolveTokens<'colors'>
  cta?: string | JSX.Element
  image: string
  title?: string
  css?: CSS
} & React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLButtonElement>

export const OverlayCard = ({ cta, title, image, accentColor, onClick, ...props }: Props): JSX.Element => (
  <Container {...props}>
    <Top
      css={{
        backgroundImage: `url(${image})`,
        borderColor: accentColor
      }}
    >
      <Title>{title}</Title>
    </Top>
    <Bottom>
      {React.isValidElement(cta) ? (
        cta
      ) : (
        <Button
          css={{
            borderColor: accentColor,

            '&:focus, &:hover': {
              backgroundColor: accentColor,
              color: '$black500',
              outline: 0
            }
          }}
          onClick={onClick}
          size="medium"
          width="full"
        >
          {cta as string}
        </Button>
      )}
    </Bottom>
  </Container>
)
