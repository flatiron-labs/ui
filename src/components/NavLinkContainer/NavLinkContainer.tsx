import React from 'react'
import { Grid } from '~/components'

export const NavLinkContainer: React.FC = ({ children }) => (
  <Grid container component="nav" direction="column" aria-label="Primary">
    {children}
  </Grid>
)
