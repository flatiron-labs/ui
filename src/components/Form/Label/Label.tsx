import React from 'react'
import type { FieldError } from 'react-hook-form'

import { styled } from '~/styles/stitches.config'

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/

const Container = styled('div', {
  backgroundColor: '$black500',
  fontSize: '12px',
  left: '15px',
  padding: '0 10px',
  position: 'absolute',
  top: '-4px',
  zIndex: 10,

  label: {
    color: '$yellow500'
  },

  span: {
    marginLeft: '1em',

    '&.error': {
      color: '$pink500'
    }
  }
})

type Props = React.ComponentPropsWithRef<typeof Container> & {
  id: string | number
  name: string
  label: string
  helpId: string
  helpText?: string
  errors: FieldError | false
}

/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/

export const Label = React.forwardRef<HTMLDivElement, Props>(
  ({ id, name, label, helpId, helpText, errors, ...props }, ref) => {
    if (!label || label === '') {
      throw new Error('[Label]: label is required')
    }

    return (
      <Container ref={ref} {...props}>
        <label id={id} htmlFor={name}>
          {label}
        </label>

        {helpText && !errors && <span id={helpId}>{helpText}</span>}

        {errors && (
          <span id={helpId} className="error">
            {errors.message}
          </span>
        )}
      </Container>
    )
  }
)

Label.displayName = 'Label'
