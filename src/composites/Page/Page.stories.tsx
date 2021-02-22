import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import { Page } from '.'
import { Button, ContentCard, Grid, Heading } from '~/components'
import { MediaCard } from '~/components/MediaCard'
import { Color } from '~/styles'

export default {
  title: 'Composites/Page'
} as Meta

const StyledDiv = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
`

const StyledGrid = styled(Grid)`
  padding-top: 20px;
`

const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6DEYCmyc8---CLd9r0GFz4VLk31QYpdl2w&usqp=CAU'

const Template: Story = () => (
  <Page style={{ minHeight: '100vh' }}>
    <>
      <StyledGrid container spacing={3} direction="column">
        <StyledDiv>
          <Heading h4>Personal Information</Heading>
        </StyledDiv>

        <Grid container spacing={3}>
          <ContentCard label="Full Name" value="John Smith" />
          <ContentCard label="Full Name" value="John Smith" />
          <ContentCard label="Full Name" value="John Smith" />
        </Grid>
      </StyledGrid>

      <StyledGrid container spacing={3} direction="column">
        <StyledDiv>
          <Heading h4>Links</Heading>
        </StyledDiv>

        <Grid container spacing={3}>
          <MediaCard src={src}>
            <Heading bold h4 color={Color.turq}>
              Gradleaders
            </Heading>
            <p>this is information about gradleaders</p>
            <Button width="100%" md>
              View Gradleaders
            </Button>
          </MediaCard>
          <MediaCard src={src}>
            <Heading bold h4 color={Color.turq}>
              Gradleaders
            </Heading>
            <p>this is information about gradleaders</p>
            <Button width="100%" md>
              View Pathright
            </Button>
          </MediaCard>
          <MediaCard src={src}>
            <Heading bold h4 color={Color.turq}>
              Gradleaders
            </Heading>
            <p>this is information about gradleaders</p>
            <Button width="100%" md>
              View Gradleaders
            </Button>
          </MediaCard>
        </Grid>
      </StyledGrid>
    </>
  </Page>
)

export const Default = Template.bind({})
