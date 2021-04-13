import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as Yup from 'yup'
import { Form, Submit } from '~/components'
import { Address } from '.'

export default {
  title: 'Components/Form/Address',
  component: Address,
  argTypes: {
    legend: {
      name: 'fieldset name (legend)',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
        default: 'Address'
      }
    },
    fieldPrefix: {
      name: 'fieldPrefix',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
        default: 'homeAddress'
      }
    }
  }
} as Meta

type Args = GetComponentProps<typeof Address> & {
  defaultValues: Record<string, unknown>
  schema: Yup.AnyObjectSchema
}

const Template: Story = (args: Args) => (
  <Form
    onSubmit={() => null}
    defaultValues={args.defaultValues}
    label="Storybook Form"
    schema={args.schema ?? Yup.object({})}
    style={{ margin: '1em' }}
  >
    <Address {...args} />
    {args.schema ? <Submit /> : null}
  </Form>
)

export const Default = Template.bind({})
Default.args = {
  legend: 'Address',
  fieldPrefix: 'address'
}

export const PresetValues = Template.bind({})
PresetValues.args = {
  legend: 'Address',
  fieldPrefix: 'address',
  defaultValues: {
    addressLine1: '123 Abc St',
    addressLine2: 'Apt 2',
    addressCity: 'Brooklyn',
    addressState: 'NY',
    addressZipcode: '11201',
    addressCountry: 'USA'
  }
}
