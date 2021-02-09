import React from 'react'
import styled from 'styled-components'
import { black, greyLight, greyDarkest, turq, white } from '../../../assets/Styles/colors'
import { Props } from './SideNavItem.types'

const StyledDiv = styled.div<{ active?: boolean }>`
  ${props =>
    props.active &&
    `
    border: 4px;
    border-color: ${greyDarkest};
    border-style: solid none solid solid;
    box-shadow: 6px 0px 0px -3px ${black};
    margin-left: 15px;
  `}
`

const StyledA = styled.a<{ active?: boolean }>`
  color: ${greyLight};
  display: flex;    
  font-family: 'Fira Code';
  font-size: 20px;
  justify-content: center;
  padding: 5px;
  padding-left: 15px;
  &:hover {
    cursor: pointer;
  }
  ${props =>
    props.active &&
    `
    color: ${turq};
    padding-right: 23px;
    padding-left: 20px;
  `}
  ${props =>
    !props.active &&
    `
    &:hover {
      color: ${white};
    }
  `}
}
`

export const SideNavItem = ({ children, ...props }: Props): JSX.Element => {
  return (
    <div>
      <StyledDiv active={props.active}>
        <StyledA active={props.active}>{children}</StyledA>
      </StyledDiv>
    </div>
  )
}
