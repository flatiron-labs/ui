import React from 'react'
import { Grid } from '~/components'

interface NavContainerProps {
  ariaLabel?: string
}

export const NavContainer: React.FC<NavContainerProps> = ({ children, ariaLabel }) => (
  <Grid container component="nav" direction="column" aria-label={ariaLabel}>
    {children}
  </Grid>
)
