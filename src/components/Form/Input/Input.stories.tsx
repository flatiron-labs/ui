import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as Yup from 'yup'
import { Form, Submit, Icon } from '~/components'
import { Input } from '.'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    name: {
      name: 'field name',
      type: { name: 'string', required: true },
      control: {
        disable: true
      }
    },
    label: {
      name: 'input label',
      type: { name: 'string', required: true },
      control: {
        type: 'text'
      }
    },
    help: {
      name: 'help text',
      type: { name: 'string', required: false },
      control: {
        type: 'text'
      }
    },
    icon: {
      name: 'Input Icon',
      type: { name: 'string', required: false },
      control: {
        type: 'select',
        options: Object.keys(Icon)
      }
    },
    type: {
      name: 'field type',
      type: { required: true }
    },
    register: { control: { disable: true } },
    schema: { control: { disable: true } }
  }
} as Meta

type Args = GetComponentProps<typeof Input> & {
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
    <Input {...args} />
    {schema ? <Submit /> : null}
  </Form>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Name',
  help: 'Enter your full name',
  icon: 'User',
  name: 'fullName'
}

export const PresetValues = Template.bind({})
PresetValues.args = {
  label: 'Name',
  help: 'Enter your full name',
  icon: 'User',
  name: 'fullName',
  defaultValues: {
    fullName: 'John Doe'
  }
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  help: 'Roll over the field',
  disabled: true
}

export const Error = Template.bind({})
Error.args = {
  label: 'Email',
  help: 'Hit submit to view the error state',
  icon: 'Code',
  name: 'email',
  schema: Yup.object({
    email: Yup.string().email().required('Email is required')
  })
}

export const Password = Template.bind({})
Password.args = {
  label: 'Password',
  help: 'Minimum of eight characters',
  type: 'password',
  icon: 'Code',
  name: 'password'
}

export const FileInput = Template.bind({})
FileInput.args = {
  label: 'File',
  type: 'file',
  name: 'file',
  accept: '.csv'
}
