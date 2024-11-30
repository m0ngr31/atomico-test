import { decorator } from "@atomico/storybook";

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  controls: { expanded: true },
  docs: {
    source: {
      // language: "jsx",
    },
  },
};

export const decorators = [decorator];
