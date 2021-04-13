import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as Yup from 'yup'
import { Form } from '~/components'
import { Submit } from '.'

export default {
  title: 'Components/Form/Submit',
  component: Submit,
  argTypes: {
    active: {
      control: {
        type: 'boolean'
      }
    },
    activeLabel: {
      type: { name: 'string' },
      control: {
        type: 'text'
      }
    },
    children: {
      name: 'label',
      type: { name: 'string', required: true },
      control: {
        type: 'text'
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

const Template: Story = (args: GetComponentProps<typeof Submit>) => (
  <Form
    onSubmit={() => null}
    defaultValues={{}}
    label="Storybook Form"
    schema={Yup.object({})}
    style={{ margin: '1em' }}
  >
    <Submit {...args} />
  </Form>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Save',
  activeLabel: 'Saving...'
}

export const Active = Template.bind({})
Active.args = {
  ...Default.args,
  active: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  appearance: 'disabled',
  disabled: true
}
