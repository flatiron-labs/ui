import React from 'react'
import { Button, ButtonProps } from './button';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: "sm",
      description: 'Adjust size  sm | md | lg',
      control: {
        type: 'select',
        options: [
          'sm', 
          'md', 
          'lg'
        ],
      },
    },
  },
} as Meta;

const Template: Story <React.FC<ButtonProps>> = (args) => <Button {...args} >Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  onClick: () => action('button clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  onClick: () => action('button clicked'),
};