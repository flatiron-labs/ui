import React from 'react'
import styled from 'styled-components'
import { Color, Font } from '~/styles'

export interface ToggleProps {
  'data-testid'?: string
  children?: React.ReactNode
  label?: string
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 15px;
  font-family: ${Font.firaCode};
  }
`

const CheckBoxLabel = styled.label`
  border-color: ${Color.black};
  border-radius: 17px;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  display: flex;
  height: 23px;
  width: 42px;
  &::after {
    background: ${Color.black};
    border-color: ${Color.black};
    border-radius: 50%;
    border-style: solid;
    border-width: 3px;
    content: '';
    display: block;
    height: 11px;
    margin: 3px;
    transition: 0.2s;
    width: 11px;
  }
`

const CheckBox = styled.input`
  border-radius: 15px;
  height: 25px;
  opacity: 0;
  width: 40px;
  z-index: 1;
  &:checked + ${CheckBoxLabel} {
    border-color: ${Color.turq};
    background: ${Color.black};
    border-style: solid;
    border-width: 2px;
    &::after {
      background: ${Color.white};
      border-color: ${Color.white};
      border-radius: 50%;
      border-style: solid;
      border-width: 3px;
      content: '';
      display: block;
      height: 11px;
      margin: 3px;
      margin-left: 21px;
      transition: 0.2s;
      width: 11px;
    }
  }
`

const StyledLabel = styled.div`
  border-color: ${Color.black};
  padding: 4px;
  }
`

const Toggle = ({ ...props }: ToggleProps): JSX.Element => {
  const { label, 'data-testid': dataTestId } = props
  return (
    <StyledDiv data-testid={dataTestId}>
      <div>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </div>
      {label && <StyledLabel>{label}</StyledLabel>}
    </StyledDiv>
  )
}

export default Toggle
