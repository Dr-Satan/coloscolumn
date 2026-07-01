<template>
  <main style="padding: 2rem; font-family: system-ui, sans-serif">
    <h1>Coloscolumn — Dev Playground</h1>

    <section>
      <h2>Variants</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap">
        <Coloscolumn variant="primary" @click="log('primary clicked')">Primary</Coloscolumn>
        <Coloscolumn variant="secondary" @click="log('secondary clicked')">Secondary</Coloscolumn>
        <Coloscolumn variant="danger" @click="log('danger clicked')">Danger</Coloscolumn>
      </div>
    </section>

    <section style="margin-top: 2rem">
      <h2>Sizes</h2>
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap">
        <Coloscolumn size="sm">Small</Coloscolumn>
        <Coloscolumn size="md">Medium</Coloscolumn>
        <Coloscolumn size="lg">Large</Coloscolumn>
      </div>
    </section>

    <section style="margin-top: 2rem">
      <h2>Disabled</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap">
        <Coloscolumn disabled>Disabled Primary</Coloscolumn>
        <Coloscolumn variant="secondary" disabled>Disabled Secondary</Coloscolumn>
      </div>
    </section>

    <pre v-if="lastEvent" style="margin-top: 2rem; padding: 1rem; background: #f3f4f6; border-radius: 6px">{{ lastEvent }}</pre>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Coloscolumn } from '../index'

const lastEvent = ref('')

function log(msg: string) {
  lastEvent.value = msg
}
</script>
