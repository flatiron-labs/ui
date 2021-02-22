import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import { Page } from '.'
import { ContentCard, Grid, Heading } from '~/components'

export default {
  title: 'Composites/Page'
} as Meta

const StyledDiv = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
`

const Template: Story = () => (
  <Page style={{ minHeight: '100vh' }}>
    <Grid container spacing={3} direction="column" style={{ paddingTop: '20px' }}>
      <StyledDiv>
        <Heading h4>Personal Information</Heading>
      </StyledDiv>

      <Grid container spacing={3}>
        <ContentCard label="Full Name" value="John Smith" />
        <ContentCard label="Full Name" value="John Smith" />
        <ContentCard label="Full Name" value="John Smith" />
      </Grid>
    </Grid>
  </Page>
)

export const Default = Template.bind({})
