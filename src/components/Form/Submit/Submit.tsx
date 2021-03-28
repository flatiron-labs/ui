/* eslint-disable react/require-default-props */

import React from 'react'
import type { StitchesVariants } from '@stitches/react'

import { Button } from '~/components/Button'

type Props = {
  readonly active?: boolean
  readonly activeLabel?: React.ReactNode | string
  readonly children?: React.ReactNode | string
  readonly register?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  readonly ref?: string
} & StitchesVariants<typeof Button>

export const Submit = ({
  active,
  activeLabel = 'Saving',
  children = 'Save',
  register,
  ...rest
}: Props): JSX.Element => (
  <Button
    appearance={active ? 'disabled' : 'secondary'}
    aria-busy={active}
    aria-live="polite"
    disabled={active}
    ref={register}
    size="large"
    type="submit"
    {...rest}
  >
    {active ? activeLabel : children}
  </Button>
)
