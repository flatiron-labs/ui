import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useId } from '@reach/auto-id'

import type { FieldError } from 'react-hook-form'
import type { Icon } from 'phosphor-react'

import { styled } from '~/styles/stitches.config'

import { Label } from '~/components/Form/Label'

type ValidFormInputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  readonly label: string
  readonly name: string
  readonly type?: ValidFormInputTypes
  readonly register?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  readonly disabled?: boolean
  readonly help?: string
  readonly icon?: Icon
}

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/

const Container = styled('div', {
  position: 'relative',

  input: {
    background: 'transparent',
    borderStyle: 'solid',
    borderWidth: '2px',
    color: '$white500',
    fontFamily: '$firaCode',
    fontSize: '$30',
    height: '64px',
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
    }
  },

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
    },
    error: {
      true: {
        input: {
          borderColor: '$pink500'
        }
      },
      false: {
        input: {
          borderColor: '$grey1000'
        }
      }
    },
    icon: {
      true: {
        input: {
          padding: '0 1em 0 3em'
        }
      },
      false: {
        input: {
          padding: '0 3em 0 1em'
        }
      }
    }
  }
})

/* -------------------------------------------------------------------------------------------------
 * Input
 * -----------------------------------------------------------------------------------------------*/

export const Input: FCWithoutChildren<Props> = ({ type = 'text', name, label, help, icon, ...rest }) => {
  const id = useId()
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
    <Container error={!!scopedErrors} icon={!!icon} active={active}>
      <Label id={id} name={name} label={label} helpId={helpId} helpText={help} errors={scopedErrors} />

      {icon && React.createElement(icon)}

      <input
        aria-labelledby={id}
        type={type}
        name={name}
        placeholder={label}
        ref={register}
        {...conditionalProps}
        {...rest}
        onFocus={setActiveState}
        onBlur={setActiveState}
      />
    </Container>
  )
}
