import React from 'react'
import { MapPin } from 'phosphor-react'

import { styled } from '~/styles/stitches.config'
import { Input, Select } from '~/components'
import { usStateAbbreviations } from '~/data'

/* -------------------------------------------------------------------------------------------------
 * FieldSet
 * -----------------------------------------------------------------------------------------------*/

const FieldSet = styled('fieldset', {
  display: 'grid',
  gap: '2em',
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
  marginInlineEnd: 0,
  marginInlineStart: 0,
  paddingBlockEnd: 0,
  paddingBlockStart: 0,
  paddingInlineEnd: 0,
  paddingInlineStart: 0
})

/* -------------------------------------------------------------------------------------------------
 * Legend
 * -----------------------------------------------------------------------------------------------*/

const Legend = styled('legend', {
  visuallyHidden: true
})

/* -------------------------------------------------------------------------------------------------
 * AddressSecondary
 * -----------------------------------------------------------------------------------------------*/

const AddressSecondary = styled('div', {
  display: 'grid',
  gap: '2em 1.5em',

  '@media only screen and (min-width: 601px)': {
    gridTemplateColumns: '1fr 1fr 1fr'
  }
})

/* -------------------------------------------------------------------------------------------------
 * Address
 * -----------------------------------------------------------------------------------------------*/

type Props = React.ComponentPropsWithRef<typeof FieldSet> & {
  readonly fieldPrefix: string
  readonly legend: string
}

export const Address = React.forwardRef<HTMLFieldSetElement, Props>(({ legend, fieldPrefix, ...rest }, ref) => (
  <FieldSet {...rest} ref={ref}>
    <Legend>{legend}</Legend>

    <Input name={`${fieldPrefix}Line1`} label="Address" icon={MapPin} />
    <Input name={`${fieldPrefix}Line2`} label="Address Line 2" icon={MapPin} />

    <AddressSecondary>
      <Input name={`${fieldPrefix}City`} label="City" />
      <Select name={`${fieldPrefix}State`} label="State" options={usStateAbbreviations} />
      <Input name={`${fieldPrefix}Zipcode`} label="Zip Code" />
    </AddressSecondary>

    <Input name={`${fieldPrefix}Country`} label="Country" />
  </FieldSet>
))

Address.displayName = 'Address'
