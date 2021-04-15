import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as Yup from 'yup'
import { Form, Submit } from '~/components'
import { Select } from '.'
import { usStateAbbreviations } from '~/data'

export default {
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {
    options: {
      control: {
        defaultValue: usStateAbbreviations
      }
    },
    register: { control: { disable: true } },
    schema: { control: { disable: true } }
  },
  args: {
    options: usStateAbbreviations,
    name: 'homeState'
  }
} as Meta

type Args = GetComponentProps<typeof Select> & {
  defaultValues: Record<string, unknown>
  schema: Yup.AnyObjectSchema
}

const Template: Story = ({ defaultValues, schema, ...args }: Args) => (
  <Form
    onSubmit={() => null}
    defaultValues={defaultValues}
    label="Storybook Form"
    schema={schema ?? Yup.object({})}
    style={{ margin: '1em' }}
  >
    <Select {...args} />
    {schema ? <Submit /> : null}
  </Form>
)

export const Default = Template.bind({})
Default.args = {
  label: 'State',
  help: 'Select a State',
  schema: Yup.object({
    homeState: Yup.string().equals(['PA'], 'Must be PA')
  })
}

export const PresetValues = Template.bind({})
PresetValues.args = {
  ...Default.args,
  defaultValues: {
    homeState: 'PA'
  }
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  help: 'Roll over',
  disabled: true
}

export const Required = Template.bind({})
Required.args = {
  label: 'State',
  help: 'Hit submit to view the error state',
  required: true
}

export const Error = Template.bind({})
Error.args = {
  label: 'State',
  help: 'Hit submit to view the error state',
  schema: Yup.object({
    homeState: Yup.string().equals(['PA'], 'Must be PA')
  })
}
