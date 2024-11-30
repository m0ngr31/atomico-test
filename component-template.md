---
{
    tags: ["{%", "%}"],
    questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## component

```jsx {%name|kebabCase%}/src/element.tsx
import { c, css } from "atomico";

function {%name|camelCase%}() {
  return (
    <host shadowDom>
      <h1>Hi <slot/></h1>
    </host>
  );
}

{%name|camelCase%}.props = {
  myProp: String
};

{%name|camelCase%}.styles = css`
  :host {
    display: block;
  }
`;

export const {%name|pascalCase%} = c({%name|camelCase%});
```

```jsx {%name|kebabCase%}/src/index.tsx
import { {%name|pascalCase%} } from "./element";
export { {%name|pascalCase%} } from "./element";

customElements.define("assemble-{%name|kebabCase%}", {%name|pascalCase%});
```

## package.json

```json {%name|kebabCase%}/package.json
{
    "name": "@assemble-web/{%name|kebabCase%}",
    "version": "1.0.0",
    "type": "module",
    "publishConfig": {
        "access": "public"
    },
    "peerDependencies": {
        "@atomico/react": "*",
        "@atomico/vue": "*"
    },
    "peerDependenciesMeta": {
        "@atomico/react": {
            "optional": true
        },
        "@atomico/vue": {
            "optional": true
        }
    },
    "scripts": {
        "build:types": "tsc",
        "build:compile": "library \"src/**/*\" --minify",
        "build:exports": "exports \"lib/**/*\" \"types/**/*\" --wrappers",
        "build": "npm run build:types && npm run build:compile && npm run build:exports",
        "working:types": "tsc --watch",
        "working:compile": "library \"src/**/*\" --watch",
        "working:exports": "exports \"lib/**/*\" \"types/**/*\" --wrappers --watch",
        "dev": "npm run build:types; npm run build:compile; npm run working:types & npm run working:compile & npm run working:exports",
        "prepublishOnly": "npm run build"
    },
    "types": "types/index.d.ts",
    "exports": {
        "./element": "./lib/element.js",
        ".": "./lib/index.js",
        "./stories/index.stories": "./src/stories/index.stories.tsx",
        "./react": "./wrappers/react.js",
        "./preact": "./wrappers/preact.js",
        "./vue": "./wrappers/vue.js"
    },
    "typesVersions": {
        "*": {
            "react": [
                "wrappers/react.d.ts"
            ],
            "element": [
                "types/element.d.ts"
            ],
            "preact": [
                "wrappers/preact.d.ts"
            ],
            "vue": [
                "wrappers/vue.d.ts"
            ]
        }
    }
}
```

## .npmignore

```txt {%name|kebabCase%}/.npmignore
node_modules
tsconfig.json
```

## tsconfig.json

```json {%name|kebabCase%}/tsconfig.json
{
    "extends": "@atomico/tsconfig/base.json",
    "include": ["src/**/*"],
    "exclude": ["src/stories"],
    "compilerOptions": {
        "outDir": "types"
    }
}
```

## stories tsconfig.json

```json {%name|kebabCase%}/src/stories/tsconfig.json
{
    "extends": "@atomico/tsconfig/base.json",
    "include": ["*.stories.tsx"]
}
```

## Component story

```tsx {%name|kebabCase%}/src/stories/index.stories.tsx
import { {%name|pascalCase%} } from "@assemble-web/{%name|kebabCase%}";
import { define } from "@atomico/storybook";

export default {
  title: "components/{%name|kebabCase%}",
  ...define(
    {%name|pascalCase%},
    { // Optional
      argTypes: {
        color: {
          description: "Description..."
        }
      }
    }
)
};

export const Story = (props) =><{%name|pascalCase%} {...props}>Atomico!</{%name|pascalCase%}>;
```

## vite.config.js

```js {%name|kebabCase%}/vite.config.js
import atomico from "@atomico/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: atomico({ cssLiterals: { minify: true, postcss: true } }),
});
```

## Component documentation

````markdown {%name|kebabCase%}/README.md
## {%name|kebabCase%}

### Properties

| Property | Type   | Description                        |
| -------- | ------ | ---------------------------------- |
| myProp   | string | defines the title of the component |

### Slots

| Property   | Type      | Description     |
| ---------- | --------- | --------------- |
| Unassigned | ChildNode | General content |

### Example

```html
<{%name|kebabCase%} my-prop="my value"></{%name|kebabCase%}>
```
````
