import { Meta, StoryObj } from "@storybook/react";
import Link, { LinkProps } from "./Link";


const meta: Meta<LinkProps> = {
    title: "Molecules/Link",
    component: Link,
    tags:['autodocs'],
    argTypes: {
        children: { type: "string" },
        className: { type: "string" },
        onClick: { action: "clicked" },
        disabled:{type:"boolean"},
      },
};

export default meta;


export const Primary: StoryObj<LinkProps> = {
    args: {
      children: "Link",
      href:'/'
    },
  };


  export const Disabled: StoryObj<LinkProps> = {
    args: {
      children: 'Link',
      disabled: true
    }
  }