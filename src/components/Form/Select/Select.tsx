/* eslint-disable react/require-default-props */
import React from 'react'

import { useFormContext } from 'react-hook-form'
import { useId } from '@reach/auto-id'

import { styled } from '~/styles/stitches.config'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  readonly options: string[] | Record<string, string>
  readonly label: string
  readonly name: string
  readonly register?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  readonly disabled?: boolean
  readonly help?: string
  readonly value?: string | number
}

const Container = styled('div', {
  position: 'relative',

  display: 'grid',
  gridTemplateAreas: 'select',
  alignItems: 'center',

  '&:after': {
    gridArea: 'select',
    content: '',
    width: '0.8em',
    height: '0.5em',
    backgroundColor: '$grey1000',
    clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
    justifySelf: 'end',
    marginRight: '1em'
  },

  select: {
    gridArea: 'select',
    width: '100%',
    height: '64px',
    cursor: 'pointer',
    borderRadius: '0',
    padding: '0 1em',
    background: 'transparent',
    borderStyle: 'solid',
    borderWidth: '2px',
    color: '$white500',
    appearance: 'none',
    transition: 'border-color 0.3s ease',
    outline: 0,

    'option[data-placeholder]': {
      color: '$grey750'
    },

    'option[value=""][disabled]': {
      display: 'none'
    },

    '&:focus': {
      borderColor: '$cyan500',
      outline: 0
    },

    '&:disabled': {
      cursor: 'not-allowed'
    }
  },

  variants: {
    error: {
      true: {
        select: {
          borderColor: '$pink500'
        }
      },
      false: {
        select: {
          borderColor: '$grey1000'
        }
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

export const Select: FCWithoutChildren<Props> = ({ name, label, help, options, ...rest }) => {
  const id = useId(rest.id)
  const { register, errors } = useFormContext()
  const conditionalProps = {}
  const helpId = `form-${name}-help`

  const scopedErrors: Record<'message' | 'type', string> = errors[name] ?? false

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
    <Container error={!!scopedErrors}>
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

      <select aria-labelledby={id} name={name} ref={register} {...conditionalProps} {...rest}>
        <option value="" disabled hidden data-placeholder>
          {label}
        </option>

        {(options as string[]).map((value: string) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </Container>
  )
}
