/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { useId } from '@reach/auto-id'

import { useTheme } from '~/context'
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
  readonly accept?: string
}

interface ContainerProps {
  hasIcon: boolean
  error: boolean
}

const Container = styled.div<ContainerProps>`
  position: relative;

  input {
    width: 100%;
    background: transparent;
    height: 64px;
    color: ${props => props.theme.colors.common.white};
    border: 2px solid ${props => (props.error ? props.theme.colors.common.pink : props.theme.colors.common.greyDarkest)};
    padding: 0 ${props => (props.hasIcon ? '1em' : '3em')} 0 ${props => (props.hasIcon ? '3em' : '1em')};
    transition: border-color 0.3s ease;

    &::placeholder {
      transition: color 0.3s ease;
      color: ${props => props.theme.colors.common.greyDark};
    }

    &:focus::placeholder {
      color: transparent;
    }

    &:focus {
      border-color: ${props => props.theme.colors.common.turq};
      outline: 0;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  svg {
    position: absolute;
    z-index: 20;
    top: 21px;
    left: 15px;
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

export const Input = ({ type = 'text', name, label, help, icon, ...rest }: Props): JSX.Element => {
  const id = useId(rest.id)
  const theme = useTheme()
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
    <Container error={!!scopedErrors} hasIcon={!!icon} theme={theme}>
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

      {FormIcon && <FormIcon color={active ? theme.colors.common.white : theme.colors.common.greyDark} />}

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
