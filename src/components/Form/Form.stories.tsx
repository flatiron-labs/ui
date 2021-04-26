import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as Yup from 'yup'
import { Form, Input, Submit } from '.'

export default {
  title: 'Components/Form/Form',
  component: Form,
  argTypes: {
    defaultValues: {
      control: {
        type: 'object',
        default: {}
      }
    },
    label: {
      name: 'input label',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
        default: 'Storybook Form'
      }
    },
    schema: {
      type: { name: 'string', required: false },
      control: {
        type: 'object',
        default: Yup.object({})
      }
    },
    debug: {
      control: {
        type: 'boolean',
        default: false
      }
    }
  }
} as Meta

const Template: Story = ({ ...args }: GetComponentProps<typeof Form>) => (
  <Form onSubmit={() => null} style={{ margin: '1em' }} {...args}>
    <Input name="fullName" label="Full Name" />
    <Submit>Save</Submit>
  </Form>
)

export const Default = Template.bind({})
Default.args = {
  defaultValues: {
    fullName: 'John Doe'
  },
  schema: Yup.object({
    fullName: Yup.string().required('Required')
  })
}

export const Debug = Template.bind({})
Debug.args = {
  ...Default.args,
  debug: true
}
