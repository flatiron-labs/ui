import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'

export interface StyledButtonProps {
  primary?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  width?: string
}

export interface ButtonProps extends StyledButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  onClick?(): React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 0;
  text-align: center;
  font-weight: bold;
  background-color: transparent;
  font-size: 12px;
  padding: 10px 30px;
  width: ${props => (props.width ? props.width : undefined)};
  ${props =>
    props.primary &&
    `
      border: 2px solid ${Color.black};
      &:focus,
      &:hover {
        border: 2px solid ${Color.turq};
        outline: 0;
      }
    `}
  ${props =>
    !props.primary &&
    `
      border: 2px solid ${Color.turq};
      color: ${Color.white};
      &:focus,
      &:hover {
        border-color:${Color.turq};
        background-color: ${Color.turq};
        color: ${Color.black};
        outline: 0;
      }
    `}
    ${props =>
    props.sm &&
    `
      font-size: 12px;
      padding: 10px 30px;
    `}
    ${props =>
    props.md &&
    `
      font-size: 14px;
      padding: 11px 40px;
    `}
    ${props =>
    props.lg &&
    `
      font-size: 16px;
      padding: 12px 50px;
    `};
`

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => (
  <StyledButton {...props}>{children}</StyledButton>
)
