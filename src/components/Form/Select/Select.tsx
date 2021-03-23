/* eslint-disable react/require-default-props */
import React from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { useId } from '@reach/auto-id'

import { useTheme } from '~/context'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  readonly options: string[] | Record<string, string>
  readonly label: string
  readonly name: string
  readonly register?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  readonly disabled?: boolean
  readonly help?: string
  readonly value?: string | number
}

interface ContainerProps {
  error: boolean
}

const Container = styled.div<ContainerProps>`
  position: relative;

  display: grid;
  grid-template-areas: 'select';
  align-items: center;

  &:after {
    grid-area: select;
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: ${props => props.theme.colors.common.greyDarkest};
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    justify-self: end;
    margin-right: 1em;
  }

  select {
    grid-area: select;
    width: 100%;
    height: 64px;
    cursor: pointer;
    border-radius: 0;
    padding: 0 1em;
    background: transparent;
    border: 2px solid ${props => (props.error ? props.theme.colors.common.pink : props.theme.colors.common.greyDarkest)};
    color: ${props => props.theme.colors.common.white};
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: border-color 0.3s ease;
    outline: 0;

    option[data-placeholder] {
      color: ${props => props.theme.colors.common.greyDark};
    }

    option[value=''][disabled] {
      display: none;
    }

    &:focus {
      border-color: ${props => props.theme.colors.common.turq};
      outline: 0;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`

const DetailsContainer = styled.div`
  position: absolute;
  z-index: 10;
  background-color: ${props => props.theme.colors.common.black};
  padding: 0 10px;
  top: -4px;
  left: 15px;
  font-size: 12px;

  label {
    color: ${props => props.theme.colors.common.yellow};
  }

  span {
    margin-left: 1em;

    &.error {
      color: ${props => props.theme.colors.common.pink};
    }
  }
`

export const Select = ({ name, label, help, options, ...rest }: Props): JSX.Element => {
  const id = useId(rest.id)
  const theme = useTheme()
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
    <Container error={!!scopedErrors} theme={theme}>
      <DetailsContainer theme={theme}>
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
