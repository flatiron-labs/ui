import React from 'react'
import styled from 'styled-components'
import { Color } from '~/styles'

export interface StyledSideNavItemProps {
  active?: boolean
}

export interface SideNavItemProps extends StyledSideNavItemProps {
  'data-testid'?: string
  children?: React.ReactNode
  active?: boolean
  closed?: boolean
  handleClose?(): void
}

const StyledDiv = styled.div<StyledSideNavItemProps>`
  ${props =>
    props.active &&
    `
    border: 4px;
    border-color: ${Color.greyDarkest};
    border-style: solid none solid solid;
    box-shadow: 6px 0px 0px -3px ${Color.black};
    margin-left: 15px;
  `}
`

const StyledA = styled.a<StyledSideNavItemProps>`
  color: ${Color.greyLight};
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
    color: ${Color.turq};
    padding-right: 23px;
    padding-left: 20px;
  `}
  ${props =>
    !props.active &&
    `
    &:hover {
      color: ${Color.white};
    }
  `}
}
`

export const SideNavItem = ({ children, ...props }: SideNavItemProps): JSX.Element => {
  const { active, 'data-testid': dataTestId } = props
  return (
    <div data-testid={dataTestId}>
      <StyledDiv active={active}>
        <StyledA active={active}>{children}</StyledA>
      </StyledDiv>
    </div>
  )
}
