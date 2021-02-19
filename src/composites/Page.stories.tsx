import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import { Grid, Header, Footer, Sidebar } from '~/components'
import { Color } from '~/styles'

export default {
  title: 'Composites/Page'
} as Meta

// https://material-ui.com/components/grid/

const Template: Story = () => (
  <Grid container style={{ minHeight: '100vh' }}>
    <Grid container wrap="nowrap">
      <Sidebar />

      {/* PAGE-SPECIFIC CONTENT */}
      <Grid container alignItems="flex-start" style={{ padding: '62px 40px 0' }}>
        <Header />

        <Grid container alignItems="flex-start">
          <p>test</p>
        </Grid>
      </Grid>
    </Grid>

    <Footer />
  </Grid>
)

const StyledHeaderExample = styled(Header)`
  border-bottom: 1px ${Color.greyDarkest} solid;
`

const Alternate: Story = () => (
  <Grid container style={{ minHeight: '100vh' }}>
    <StyledHeaderExample />

    <Grid container wrap="nowrap">
      <Sidebar />

      {/* PAGE-SPECIFIC CONTENT */}
      <Grid container alignItems="flex-start" style={{ padding: '62px 40px 0' }}>
        <p>test</p>
      </Grid>
    </Grid>

    <Footer />
  </Grid>
)
export const Default = Template.bind({})
export const AlternateExample = Alternate.bind({})
