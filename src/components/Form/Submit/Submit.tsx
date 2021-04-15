import React from 'react'
import { Button } from '~/components/Button'

type El = typeof Button
type Props = {
  readonly active?: boolean
  readonly activeLabel?: React.ReactNode | string
} & StitchesComponent<El>

export const Submit = React.forwardRef<El, Props>(
  ({ active, activeLabel = 'Submitting', children = 'Submit', ...rest }, ref) => (
    <Button
      as="button"
      appearance={active ? 'disabled' : 'secondary'}
      aria-busy={active}
      aria-live="polite"
      disabled={active}
      size="large"
      ref={ref}
      type="submit"
      {...rest}
    >
      {active ? activeLabel : children}
    </Button>
  )
)
Submit.displayName = 'Submit'
