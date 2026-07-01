<template>
  <main class="app">
    <h1 class="title">Coloscolumn</h1>
    <p class="subtitle">A button to rule them all!</p>
    <ColosButton @colos-click="onColosClick" />
    <p v-if="clickCount > 0" class="counter">
      Clicked {{ clickCount }} time{{ clickCount === 1 ? '' : 's' }} 👑
    </p>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import ColosButton from './components/ColosButton.vue'

const clickCount = ref(0)

function onColosClick() {
  clickCount.value++
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f1a;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #e0e0ff;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
}

.counter {
  font-size: 1.2rem;
  color: #c4b5fd;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
