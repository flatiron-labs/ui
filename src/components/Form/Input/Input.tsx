/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useId } from '@reach/auto-id'

import { styled } from '~/styles/stitches.config'
import { Icon } from '~/components'

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
  readonly icon?: string
}

const Container = styled('div', {
  position: 'relative',

  input: {
    width: '100%',
    background: 'transparent',
    height: '64px',
    color: '$white500',
    borderStyle: 'solid',
    borderWidth: '2px',
    transition: 'border-color 0.3s ease',

    '&::placeholder': {
      transition: 'color 0.3s ease',
      color: '$grey750'
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

  '& svg': {
    position: 'absolute',
    zIndex: 20,
    top: '21px',
    left: '15px'
  },

  variants: {
    error: {
      true: {
        borderColor: '$pink500'
      },
      false: {
        borderColor: '$grey1000'
      }
    },
    icon: {
      true: {
        padding: '0 1em 0 3em'
      },
      false: {
        padding: '0 3em 0 1em'
      }
    }
  }
})

const DetailsContainer = styled('div', {
  position: 'absolute',
  zIndex: 10,
  backgroundColor: '$black500',
  padding: '0 10px',
  top: '-4px',
  left: '15px',
  fontSize: '12px',

  '& label': {
    color: '$yellow500'
  },

  '& span': {
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
  const FormIcon = Icon[icon]

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
    <Container error={!!scopedErrors} icon={!!icon}>
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

      {FormIcon && <FormIcon css={{ color: active ? '$white500' : '$grey750' }} />}

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
