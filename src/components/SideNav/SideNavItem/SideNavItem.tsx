import React from 'react'
import styled from 'styled-components'
import colors from '~/styles/colors'
import { Props } from './SideNavItem.types'

const StyledDiv = styled.div<{ active?: boolean }>`
  ${props =>
    props.active &&
    `
    border: 4px;
    border-color: ${colors.greyDarkest};
    border-style: solid none solid solid;
    box-shadow: 6px 0px 0px -3px ${colors.black};
    margin-left: 15px;
  `}
`

const StyledA = styled.a<{ active?: boolean }>`
  color: ${colors.greyLight};
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
    color: ${colors.turq};
    padding-right: 23px;
    padding-left: 20px;
  `}
  ${props =>
    !props.active &&
    `
    &:hover {
      color: ${colors.white};
    }
  `}
}
`

const SideNavItem = ({ children, ...props }: Props): JSX.Element => {
  const { active, 'data-testid': dataTestId } = props
  return (
    <div data-testid={dataTestId}>
      <StyledDiv active={active}>
        <StyledA active={active}>{children}</StyledA>
      </StyledDiv>
    </div>
  )
}

export default SideNavItem
