import { Button } from "@assemble-web/button";
import { define } from "@atomico/storybook";

export default {
  title: "components/button",
  ...define(Button, {
    argTypes: {
      type: {
        description: "The type of button, can be 'primary' or 'secondary'.",
        control: { type: "radio" },
        options: ["primary", "secondary"],
        defaultValue: "primary",
      },
      display: {
        description:
          "The display style of the button, can be 'block' or 'inline'.",
        control: { type: "radio" },
        options: ["block", "inline"],
        defaultValue: "block",
      },
      onClick: {
        description: "Callback when button is clicked",
        action: "clicked",
      },
    },
    args: {
      type: "primary",
      display: "block",
      onClick: () => alert("Button clicked!"),
    },
  }),
};

export const Story = (props) => <Button {...props}>Button</Button>;