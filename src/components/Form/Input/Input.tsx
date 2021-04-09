/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useId } from '@reach/auto-id'

import type { Icon } from 'phosphor-react'

import { styled } from '~/styles/stitches.config'

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
      },
      false: {}
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

const DetailsContainer = styled('div', {
  backgroundColor: '$black500',
  fontSize: '$10',
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

export const Input: FCWithoutChildren<Props> = ({ type = 'text', name, label, help, icon, ...rest }) => {
  const id = useId(rest.id)
  const { register, errors } = useFormContext()
  const [active, setActive] = useState(false)
  const setActiveState = () => setActive(!active)

  const scopedErrors: Record<'message' | 'type', string> = errors[name] ?? false

  const conditionalProps = {}
  const helpId = `form-${name}-help`

  if (!label || label === '') {
    throw new Error('label is required')
  }

  if (help) {
    conditionalProps['aria-describedby'] = helpId
  }

  if (scopedErrors) {
    conditionalProps['aria-invalid'] = true
  }

  return (
    <Container error={!!scopedErrors} icon={!!icon} active={active}>
      <DetailsContainer>
        <label id={id} htmlFor={name}>
          {label}
        </label>

        {help && !scopedErrors && <span id={helpId}>{help}</span>}

        {scopedErrors && (
          <span id={helpId} className="error">
            {scopedErrors.message}
          </span>
        )}
      </DetailsContainer>

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
