import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Grid, Toggle } from '~/components'

export default {
  title: 'Examples/Page'
} as Meta

const Template: Story = () => (
  <Grid container>
    <Grid container style={{ backgroundColor: 'blue' }}>
      <Grid item style={{ backgroundColor: 'green' }} xs={2}>
        <p>Sidebar</p>
      </Grid>

      <Grid item>
        <Toggle label="Side 1" />
        <Toggle label="Side 2" />
      </Grid>
    </Grid>

    <Grid item style={{ backgroundColor: 'purple' }} xs={12}>
      <p>Footer</p>
    </Grid>
  </Grid>
)

export const Default = Template.bind({})
