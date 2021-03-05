import React from 'react'
import styled from 'styled-components'
import { Grid, Button, Icon, FlatironLogo } from '~/components'
import { Media } from '~/styles'

const Container = styled(props => (
  <Grid container direction="row" justify="space-between" alignItems="center" {...props} />
))`
  min-height: 72px;

  ${Media.sm} {
    min-height: 40px;
  }
`

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
`

export interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = props => (
  <Container {...props}>
    <FlatironLogo />
    <StyledButton sm>
      Turn off student base experience
      <Icon.Exit style={{ paddingLeft: '5px' }} />
    </StyledButton>
  </Container>
)
