import React, { useState } from 'react'
import { GridSize } from '@material-ui/core'
import styled from 'styled-components'
import { Grid, Header, Footer, Sidebar } from '../..'

export interface PageProps {
  children: JSX.Element
  style?: React.CSSProperties
}

export interface ContentProps {
  children?: React.ReactNode
  lg?: boolean | GridSize
  md?: boolean | GridSize
  sm?: boolean | GridSize
  xs?: boolean | GridSize
}

const StyledContent = styled(Grid)<ContentProps>`
  padding: 62px 40px 0;
  transition: all 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
`

const Content = ({ children, ...props }: ContentProps): JSX.Element => (
  <StyledContent container alignItems="flex-start" alignContent="flex-start" {...props}>
    {children}
  </StyledContent>
)

export const Page = ({ children, ...props }: PageProps): JSX.Element => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleOnExpand = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid container {...props}>
      <Grid container wrap="nowrap">
        <Sidebar
          onExpand={handleOnExpand}
          expanded={sidebarExpanded}
          xs={sidebarExpanded === true ? 7 : 2}
          sm={sidebarExpanded === true ? 5 : 1}
          md={2}
        />

        <Content xs={sidebarExpanded === true ? 5 : true} sm={sidebarExpanded === true ? 5 : true}>
          <Header />
          {children}
        </Content>
      </Grid>

      <Footer />
    </Grid>
  )
}
