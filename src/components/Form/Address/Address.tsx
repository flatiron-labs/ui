import React from 'react'
import styled from 'styled-components'
import { Input, Select } from '~/components'
import { usStateAbbreviations } from '~/data'

interface Props {
  readonly fieldPrefix: string
  readonly legend: string
}

const Fieldset = styled.fieldset`
  display: grid;
  gap: 2em;

  // START TODO: Move to Globals
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  padding-block-end: 0;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  // END TODO: Move to Globals

  legend {
    // START TODO: Create visually-hidden CSS helper
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    // END TODO: Create visually-hidden CSS helper
  }
`

const AddressSecondary = styled.div`
  display: grid;
  gap: 2em 1.5em;

  @media only screen and (min-width: 601px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Address = ({ legend, fieldPrefix }: Props): JSX.Element => (
  <Fieldset>
    <legend>{legend}</legend>

    <Input name={`${fieldPrefix}Line1`} label="Address" icon="Location" />
    <Input name={`${fieldPrefix}Line2`} label="Address Line 2" icon="Location" />

    <AddressSecondary>
      <Input name={`${fieldPrefix}City`} label="City" />
      <Select name={`${fieldPrefix}State`} label="State" options={usStateAbbreviations} />
      <Input name={`${fieldPrefix}Zipcode`} label="Zip Code" />
    </AddressSecondary>

    <Input name={`${fieldPrefix}Country`} label="Country" />
  </Fieldset>
)
