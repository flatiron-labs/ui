import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { GridSize } from '@material-ui/core'
import styled from 'styled-components'
import { Grid, Header, Footer, Sidebar } from '~/components'

export default {
  title: 'Composites/Page'
} as Meta

// https://material-ui.com/components/grid/

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

const Template: Story = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleOnExpand = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid container wrap="nowrap">
        <Sidebar
          expanded={sidebarExpanded}
          onExpand={handleOnExpand}
          xs={sidebarExpanded === true ? 4 : 2}
          sm={sidebarExpanded === true ? 3 : 1}
          md={2}
        />

        <Content xs={sidebarExpanded === true ? 8 : true} sm={sidebarExpanded === true ? 9 : true}>
          <Header />

          <Grid container alignContent="flex-start">
            <p>Content</p>
          </Grid>
        </Content>
      </Grid>

      <Footer />
    </Grid>
  )
}

const Alternate: Story = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleOnExpand = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <Header />

      <Grid container wrap="nowrap">
        <Sidebar
          onExpand={handleOnExpand}
          xs={sidebarExpanded === true ? 7 : 2}
          sm={sidebarExpanded === true ? 5 : 1}
          md={2}
        />

        <Content xs={sidebarExpanded === true ? 5 : true} sm={sidebarExpanded === true ? 5 : true}>
          <p>test</p>
        </Content>
      </Grid>

      <Footer />
    </Grid>
  )
}
export const Default = Template.bind({})
export const AlternateExample = Alternate.bind({})
