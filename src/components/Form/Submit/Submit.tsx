/* eslint-disable react/require-default-props */

import React from 'react'
import styled from 'styled-components'

import { Button } from '~/components/Button'
import { useTheme } from '~/context'

interface Props {
  readonly active?: boolean
  readonly activeLabel?: React.ReactNode | string
  readonly children?: React.ReactNode | string
  readonly register?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  readonly ref?: string
}

// TODO: Transfer to Button in component lib
const StyledButton = styled(Button)`
  justify-self: start;

  ${props =>
    props.disabled &&
    `
      border-color: ${props.theme.colors.common.greyDarkest};
      color: ${props.theme.colors.common.greyDark};
      cursor: not-allowed;

      &:focus,
      &:hover {
        border-color: ${props.theme.colors.common.greyDarkest};
        background-color: ${props.theme.colors.common.black};
        color: ${props.theme.colors.common.greyDark};
      }
    `}
`

export const Submit = ({
  active,
  activeLabel = 'Saving',
  children = 'Save',
  register,
  ...rest
}: Props): JSX.Element => {
  const theme = useTheme()

  return (
    <StyledButton
      theme={theme}
      lg
      type="submit"
      ref={register}
      aria-live="polite"
      aria-busy={active}
      disabled={active}
      {...rest}
    >
      {active ? activeLabel : children}
    </StyledButton>
  )
}
