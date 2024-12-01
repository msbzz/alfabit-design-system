import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    className: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    className: "",
  },
};

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Primary Button",
    className: "bg-blue-500",
  },
};

export const WithEvent: StoryObj<ButtonProps> = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};
