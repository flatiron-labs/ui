import React from "react";
import { Button } from "./Button";
import { Props } from "./Button.types";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

export default {
  title: "Inputs/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "sm",
      description: "Adjust size  sm | md | lg",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    primary: {
      defaultValue: false,
      description: "Adjust button type",
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story = (args: Props) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  onClick: () => action("button clicked"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  onClick: () => action("button clicked"),
};
