import React from 'react'
import styled from '@emotion/styled'
import { flatironTheme } from '~/styles'

export interface StyledButtonProps {
  primary?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  style?: React.CSSProperties
}

export interface ButtonProps extends StyledButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
}

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 0;
  text-align: center;
  font-weight: bold;
  background-color: transparent;
  font-size: 12px;
  padding: 10px 30px;
  cursor: pointer;

  ${props =>
    props.primary &&
    `
      border: 2px solid ${flatironTheme.colors.common.black};
      &:focus,
      &:hover {
        border: 2px solid ${flatironTheme.colors.common.turq};
        outline: 0;
        transition: 150ms ease-in-out;
      }
    `}

  ${props =>
    !props.primary &&
    `
      border: 2px solid ${flatironTheme.colors.common.turq};
      color: ${flatironTheme.colors.common.white};
      &:focus,
      &:hover {
        border-color:${flatironTheme.colors.common.turq};
        background-color: ${flatironTheme.colors.common.turq};
        color: ${flatironTheme.colors.common.black};
        outline: 0;
        transition: 150ms ease-in-out;
      }
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
