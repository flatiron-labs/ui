import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useId } from '@reach/auto-id'

import type { FieldError } from 'react-hook-form'
import type { Icon } from 'phosphor-react'

import { styled } from '~/styles/stitches.config'
import { Label } from '~/components/Form/Label'

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/

const Container = styled('div', {
  position: 'relative',

  svg: {
    color: '$grey750',
    left: '15px',
    position: 'absolute',
    top: '21px',
    zIndex: 20
  },

  variants: {
    active: {
      true: {
        svg: {
          color: '$white500'
        }
      }
    }
  }
})

/* -------------------------------------------------------------------------------------------------
 * StyledInput
 * -----------------------------------------------------------------------------------------------*/

const StyledInput = styled('input', {
  background: 'transparent',
  borderColor: '$grey1000',
  borderStyle: 'solid',
  borderWidth: '2px',
  color: '$white500',
  fontFamily: '$firaCode',
  fontSize: '$30',
  height: '64px',
  padding: '0 3em 0 1em',
  transition: 'border-color 0.3s ease',
  width: '100%',

  '&::placeholder': {
    color: '$grey750',
    transition: 'color 0.3s ease'
  },

  '&:focus::placeholder': {
    color: 'transparent'
  },

  '&:focus': {
    borderColor: '$cyan500',
    outline: 0
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  variants: {
    error: {
      true: {
        borderColor: '$pink500'
      }
    },
    hasIcon: {
      true: {
        padding: '0 1em 0 3em'
      }
    }
  }
})

/* -------------------------------------------------------------------------------------------------
 * Input
 * -----------------------------------------------------------------------------------------------*/

type Props = React.ComponentPropsWithRef<typeof StyledInput> & {
  readonly help?: string
  readonly icon?: Icon
  readonly label: string
  readonly name: string
}

export const Input = React.forwardRef<HTMLDivElement, Props>(
  ({ type = 'text', name, label, help, icon, ...rest }, ref) => {
    const fieldId = useId()
    const { register, errors } = useFormContext()
    const [active, setActive] = useState(false)
    const setActiveState = () => setActive(!active)

    const scopedErrors: FieldError | false = errors[name] ?? false
    const helpId = `form-${name}-help`

    const conditionalProps = {}

    if (help) {
      conditionalProps['aria-describedby'] = helpId
    }

    if (scopedErrors) {
      conditionalProps['aria-invalid'] = true
    }

    return (
      <Container active={active} ref={ref}>
        <Label id={fieldId} name={name} label={label} helpId={helpId} helpText={help} errors={scopedErrors} />

        {icon && React.createElement(icon)}

        <StyledInput
          {...conditionalProps}
          {...rest}
          aria-labelledby={fieldId}
          error={!!scopedErrors}
          hasIcon={!!icon}
          name={name}
          onFocus={setActiveState}
          onBlur={setActiveState}
          placeholder={label}
          ref={register}
          type={type}
        />
      </Container>
    )
  }
)

Input.displayName = 'Input'
