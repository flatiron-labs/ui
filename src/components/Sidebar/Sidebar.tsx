import React from 'react'
import styled from 'styled-components'
import { GridSize } from '~/components'
import { useTheme } from '~/context'
import { Media, ThemeProps } from '~/styles'

interface StyledLinkProps extends ThemeProps {
  active?: boolean
  expanded?: boolean
}

const StyledSidebar = styled.div<StyledLinkProps>`
  background-color: ${props => props.theme.colors.common.black};
  min-height: 99%;
  flex-direction: column;
  border-right: 1px ${props => props.theme.colors.common.greyDarkest} solid;
  padding: 30px 0 0 0;
  position: absolute;
  z-index: 555;

  ${props =>
    props.expanded &&
    `
      width: 250px;
      overflow-x: auto;
      transition: width 150ms, height 150ms, transform 150ms ease-in-out;
    `}

  ${props =>
    !props.expanded &&
    `
      width: 0px;
      overflow-x: auto;
      transition: width 150ms, height 150ms, transform 150ms ease-in-out;
    `}

  ${Media.md} {
    width: 250px !important;
    display: flex !important;
  }
`

export interface SidebarProps extends StyledLinkProps {
  children: JSX.Element[]
  expanded: boolean
  style?: Record<string, string | number>
  lg?: boolean | GridSize
  md?: boolean | GridSize
  sm?: boolean | GridSize
  xs?: boolean | GridSize
}

export const Sidebar = ({ children, expanded, style, ...props }: SidebarProps): JSX.Element => {
  const theme = useTheme()
  return (
    <StyledSidebar expanded={expanded} theme={theme} style={{ ...style }} {...props}>
      {children}
    </StyledSidebar>
  )
}
