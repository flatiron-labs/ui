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
  alignItems: 'center',
  display: 'grid',
  // gridTemplateAreas: 'select',
  position: 'relative',

  '&:after': {
    // gridArea: 'select',
    backgroundColor: '$grey1000',
    clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
    content: '',
    height: '0.5em',
    justifySelf: 'end',
    marginRight: '1em',
    width: '0.8em'
  },

  select: {
    appearance: 'none',
    background: 'transparent',
    borderRadius: '0',
    borderStyle: 'solid',
    borderWidth: '2px',
    color: '$white500',
    cursor: 'pointer',
    fontSize: '$30',
    // gridArea: 'select',
    height: '64px',
    outline: 0,
    padding: '0 1em',
    transition: 'border-color 0.3s ease',
    width: '100%',

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
