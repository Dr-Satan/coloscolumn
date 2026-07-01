# Coloscolumn

A button to rule them all!

A lightweight Vue 3 button component library, built with Vite and TypeScript.

## Installation

```sh
pnpm add coloscolumn
```

## Usage

### Register globally (plugin)

```ts
import { createApp } from 'vue'
import App from './App.vue'
import Coloscolumn from 'coloscolumn'
import 'coloscolumn/dist/style.css'

createApp(App).use(Coloscolumn).mount('#app')
```

```vue
<template>
  <Coloscolumn variant="primary" @click="onClick">Click me</Coloscolumn>
</template>
```

### Import on demand

```vue
<template>
  <Coloscolumn variant="danger" size="lg" @click="onClick">Delete</Coloscolumn>
</template>

<script setup lang="ts">
import { Coloscolumn } from 'coloscolumn'
import 'coloscolumn/dist/style.css'
</script>
```

## Props

| Prop       | Type                                  | Default     | Description            |
| ---------- | ------------------------------------- | ----------- | ---------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Visual style variant   |
| `size`     | `'sm' \| 'md' \| 'lg'`               | `'md'`      | Button size            |
| `disabled` | `boolean`                             | `false`     | Disables the button    |

## Events

| Event   | Payload      | Description              |
| ------- | ------------ | ------------------------ |
| `click` | `MouseEvent` | Fired on button click    |

## Development

```sh
# Install dependencies
pnpm install

# Start the dev playground
pnpm dev

# Build the library
pnpm build
```

## License

MIT © Pontoizeau Erwan
