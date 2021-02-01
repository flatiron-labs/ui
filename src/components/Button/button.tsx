import React from 'react'
import styled from 'styled-components'

export type size = 'sm'|'md'|'lg'| undefined;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: size,
  primary?: boolean,
  onClick?(): any
}

const StyledButton = styled.button<{ primary?: boolean, size?: size}>`
    font-family: 'Fira Code';
    background-color: black;
    border-radius: 0;
    text-align: center;
    font-weight: bold;

  ${props =>
    props.primary && `
      border: 2px solid rgba(12, 50, 62, 1);
      color: rgba(0, 239, 225, 1);

      &:focus,
      &:hover {
        border-color: rgba(0, 239, 225, 1);
        outline: 0;
      }
    `
  }

  ${props =>
    !props.primary && `
      border: 2px solid rgba(0, 239, 225, 1);
      color: white;

      &:focus,
      &:hover {
        border-color: rgba(0, 239, 225, 1);
        background-color: rgba(0, 239, 225, 1);
        color: rgba(12, 50, 62, 1);
        outline: 0;
      }
    `
  }

  ${props =>
    (props.size === 'sm' || !props.size) && `
      font-size: 12px;
      padding: 10px 30px;
    `
  }

  ${props =>
    props.size === 'md' && `
      font-size: 14px;
      padding: 11px 40px;
    `
  }

  ${props =>
    props.size === 'lg' && `
      font-size: 16px;
      padding: 12px 50px;
    `
  }
`

export const Button: React.FC<ButtonProps> = ({ children, ...props}) => {
  return <StyledButton {...props} >{children}</StyledButton>
}