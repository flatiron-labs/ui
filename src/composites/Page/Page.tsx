import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid, Header, Footer, Sidebar, Media } from '~/index' // Intentionally using the root index.ts

export interface PageProps {
  children: JSX.Element[]
  style?: React.CSSProperties
}

const StyledContent = styled.div<{ sidebarExpanded?: boolean }>`
  align-items: flex-start;
  align-content: flex-start;
  padding: 62px 20px 31px;
  ${Media.md} {
    padding: 62px 62px 31px;
  }
`

const StyledHeader = styled(Header)`
  margin-bottom: 4em;
`

export const Page = ({ children, ...props }: PageProps): JSX.Element => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleOnExpand = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid item {...props}>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid container wrap="nowrap">
          <Sidebar
            onExpand={handleOnExpand}
            expanded={sidebarExpanded}
            xs={sidebarExpanded === true ?? 2}
            sm={sidebarExpanded === true ?? 1}
            md={2}
          />

          <Grid item xs={sidebarExpanded === true ? 5 : true} sm={sidebarExpanded === true ? 5 : true}>
            <StyledContent sidebarExpanded={sidebarExpanded}>
              <StyledHeader />
              {children}
            </StyledContent>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  )
}
