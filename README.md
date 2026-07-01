# ColosColumn

> **Column visibility selector for Element Plus tables.**

`ColosColumn` is a Vue 3 component that adds a dropdown button to any `el-table`, letting users show or hide individual columns on the fly. Visibility state is persisted in `localStorage` and automatically restored on page reload.

## How it works

1. You pass your `el-table` ref to `ColosColumn` via the `tableInstance` prop.
2. On mount, the component reads the table's internal column definitions and builds a toggle list.
3. When a user hides a column, the component uses DOM targeting (`nth-child` selectors) to set `display: none` on the relevant header and body cells — no interference with Element Plus internals.
4. The visibility state is serialized to `localStorage` under a key derived from the column names, so each distinct table gets its own saved state.

## Requirements

- [Vue 3](https://vuejs.org/) ≥ 3.0
- [Element Plus](https://element-plus.org/) ≥ 2.0
- [Bootstrap 5](https://getbootstrap.com/) ≥ 5.0 (utility classes + Bootstrap Icons)

## Installation

```bash
# npm
npm install github:Dr-Satan/coloscolumn

# pnpm
pnpm add github:Dr-Satan/coloscolumn

# yarn
yarn add github:Dr-Satan/coloscolumn
```

Make sure Bootstrap 5 is loaded in your app (CSS + Bootstrap Icons):

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
```

## Usage

```vue
<template>
  <ColosColumn :table-instance="tableRef" />

  <el-table ref="tableRef" :data="rows">
    <el-table-column prop="name"   label="Name" />
    <el-table-column prop="role"   label="Role" />
    <el-table-column prop="status" label="Status" />
  </el-table>
</template>

<script setup>
import { ref } from 'vue'
import { ColosColumn } from 'coloscolumn'

const tableRef = ref(null)
const rows = [
  { name: 'Alice', role: 'Engineer', status: 'Active' },
  { name: 'Bob',   role: 'Designer', status: 'Active' },
]
</script>
```

> **Note:** `element-plus` and `bootstrap` must already be set up in your app — they are peer dependencies and are not bundled with `ColosColumn`.

## Props

| Prop            | Type            | Required | Description                                                                 |
|-----------------|-----------------|----------|-----------------------------------------------------------------------------|
| `tableInstance` | `TableInstance` | No       | The ref of the `el-table` to control. The component renders nothing if absent (useful during async page load). |

## Features

- ✅ Toggle any column on/off from a dropdown
- ✅ "See All" button to restore full visibility at once
- ✅ Persists state in `localStorage` per table (identified by its column set)
- ✅ Survives data reloads — reapplies visibility after table data changes
- ✅ Skips `selection` columns automatically
- ✅ Zero impact on Element Plus internal state (pure DOM approach)

## Project structure

```
coloscolumn/
├── src/
│   ├── index.ts                    # Library entry point
│   ├── components/
│   │   └── ColosColumn.vue         # The component
│   ├── App.vue                     # Dev playground
│   └── main.js                     # Dev entry point
├── dist/
│   ├── coloscolumn.es.js           # ESM build
│   └── coloscolumn.umd.js          # UMD build
└── package.json
```

## Tech stack

- [Vue 3](https://vuejs.org/) — Composition API (`<script setup lang="ts">`)
- [Vite](https://vitejs.dev/) — Library mode build
- [Element Plus](https://element-plus.org/) — UI components (peer dependency)
- [Bootstrap Icons](https://icons.getbootstrap.com/) — Icons

## License

MIT © Dr-Satan

