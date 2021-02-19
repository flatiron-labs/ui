import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { GridSize } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import styled from 'styled-components'
import { Grid, Header, Footer, Sidebar } from '~/components'
import { Color } from '~/styles'

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
  transition: ${({ theme }) =>
    theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
`

const Content = ({ children, ...props }: ContentProps): JSX.Element => {
  const theme = useTheme()

  return (
    <StyledContent container alignItems="flex-start" alignContent="flex-start" theme={theme} {...props}>
      {children}
    </StyledContent>
  )
}

const Template: Story = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleOnExpand = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid container wrap="nowrap">
        <Sidebar
          onExpand={handleOnExpand}
          xs={sidebarExpanded === true ? 7 : 2}
          sm={sidebarExpanded === true ? 7 : 1}
          md={2}
        />

        <Content xs={sidebarExpanded === true ? 5 : true} sm={sidebarExpanded === true ? 5 : true}>
          <Header />

          <Grid container alignContent="flex-start">
            <p>test</p>
          </Grid>
        </Content>
      </Grid>

      <Footer />
    </Grid>
  )
}

const StyledHeaderExample = styled(Header)`
  border-bottom: 1px ${Color.greyDarkest} solid;
  padding: 0 40px 0;
`

const Alternate: Story = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const handleOnExpand = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <StyledHeaderExample />

      <Grid container wrap="nowrap">
        <Sidebar
          onExpand={handleOnExpand}
          xs={sidebarExpanded === true ? 7 : 2}
          sm={sidebarExpanded === true ? 7 : 1}
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
