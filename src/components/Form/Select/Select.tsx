import React from 'react'

import { useFormContext } from 'react-hook-form'
import { useId } from '@reach/auto-id'

import { Label } from '~/components/Form/Label'
import { styled } from '~/styles/stitches.config'

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/

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
  }
})

/* -------------------------------------------------------------------------------------------------
 * StyledSelect
 * -----------------------------------------------------------------------------------------------*/

const StyledSelect = styled('select', {
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

  '&:focus': {
    borderColor: '$cyan500',
    outline: 0
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  '&:invalid': {
    color: '$grey750'
  },

  variants: {
    error: {
      true: {
        borderColor: '$pink500'
      },
      false: {
        borderColor: '$grey1000'
      }
    }
  }
})

/* -------------------------------------------------------------------------------------------------
 * Select
 * -----------------------------------------------------------------------------------------------*/

type Props = React.ComponentPropsWithRef<typeof StyledSelect> & {
  readonly help?: string
  readonly label: string
  readonly name: string
  readonly options: string[] | string[][]
}

export const Select = React.forwardRef<HTMLDivElement, Props>(
  ({ name, label, help, options, children, ...rest }, ref) => {
    const fieldId = useId()
    const { register, errors } = useFormContext()

    const conditionalProps = {}
    const helpId = `form-${name}-help`
    const scopedErrors: Record<'message' | 'type', string> = errors[name] ?? false

    if (help) {
      conditionalProps['aria-describedby'] = helpId
    }

    if (scopedErrors) {
      conditionalProps['aria-invalid'] = true
    }

    const simpleOptions = !Array.isArray(options[0])

    return (
      <Container ref={ref}>
        <Label id={fieldId} name={name} label={label} helpId={helpId} helpText={help} errors={scopedErrors} />

        <StyledSelect
          {...conditionalProps}
          {...rest}
          error={!!scopedErrors}
          aria-labelledby={fieldId}
          name={name}
          ref={register}
        >
          <option value="">{label}</option>

          {simpleOptions &&
            (options as string[]).map((optionValue: string) => (
              <option key={`${name}-${optionValue}`} value={optionValue}>
                {optionValue}
              </option>
            ))}

          {!simpleOptions &&
            (options as string[][]).map((option: string[]) => (
              <option key={`${name}-${option[0]}`} value={option[0]}>
                {option[1]}
              </option>
            ))}
        </StyledSelect>
      </Container>
    )
  }
)

Select.displayName = 'Select'
