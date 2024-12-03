import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { type: "string" },
    className: { type: "string" },
    onClick: { action: "clicked" },
    disabled:{type:"boolean"},
  },
};

export default meta;

 

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Primary Button",
  },
};

export const ThemeViolete: StoryObj<ButtonProps> = {
  args: {
    children: "Violet Button",
    className: "theme-violet",
  },
};


export const WithEvent: StoryObj<ButtonProps> = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};
