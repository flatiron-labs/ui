import React from 'react'

import { MapPin } from 'phosphor-react'

import { styled } from '~/styles/stitches.config'
import { Input, Select } from '~/components'
import { usStateAbbreviations } from '~/data'

interface Props {
  readonly fieldPrefix: string
  readonly legend: string
}

const Fieldset = styled('fieldset', {
  display: 'grid',
  gap: '2em',

  // START TODO: Move to Globals
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
  marginInlineEnd: 0,
  marginInlineStart: 0,
  paddingBlockEnd: 0,
  paddingBlockStart: 0,
  paddingInlineEnd: 0,
  paddingInlineStart: 0,
  // END TODO: Move to Globals

  legend: {
    // START TODO: Create visually-hidden CSS helper
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
    // END TODO: Create visually-hidden CSS helper
  }
})

const AddressSecondary = styled('div', {
  display: 'grid',
  gap: '2em 1.5em',

  '@media only screen and (min-width: 601px)': {
    gridTemplateColumns: '1fr 1fr 1fr'
  }
})

export const Address = ({ legend, fieldPrefix }: Props): JSX.Element => (
  <Fieldset>
    <legend>{legend}</legend>

    <Input name={`${fieldPrefix}Line1`} label="Address" icon={MapPin} />
    <Input name={`${fieldPrefix}Line2`} label="Address Line 2" icon={MapPin} />

    <AddressSecondary>
      <Input name={`${fieldPrefix}City`} label="City" />
      <Select name={`${fieldPrefix}State`} label="State" options={usStateAbbreviations} />
      <Input name={`${fieldPrefix}Zipcode`} label="Zip Code" />
    </AddressSecondary>

    <Input name={`${fieldPrefix}Country`} label="Country" />
  </Fieldset>
)
