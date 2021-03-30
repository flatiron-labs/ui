import React from 'react'
import styled from 'styled-components'
import { flatironTheme } from '~/styles'

interface StyledAvatarProps {
  backgroundColor?: string
  color?: string
}

interface Props extends StyledAvatarProps {
  children: React.ReactNode
}

const StyledDiv = styled.div<StyledAvatarProps>`
  align-items: center;
  color: ${props => (props.color ? props.color : flatironTheme.colors.common.black)};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : flatironTheme.colors.common.blue)};
  display: flex;
  border-radius: 50%;
  font-size: 20px;
  height: 62px;
  justify-content: center;
  width: 62px;
`

export const Avatar: FC<Props> = ({ children, ...props }) => (
  <StyledDiv {...props}>
    <>{children}</>
  </StyledDiv>
)
