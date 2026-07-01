<template>
  <main class="app">
    <h1 class="title">ColosColumn</h1>
    <p class="subtitle">Column visibility selector for Element Plus tables</p>
    <p class="hint">Pass a <code>tableInstance</code> ref to <code>&lt;ColosColumn&gt;</code> to get started.</p>
  </main>
</template>

<script setup>
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
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 900px;
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1rem;
  color: #94a3b8;
}

.hint {
  font-size: 0.9rem;
  color: #64748b;
}

.hint code {
  color: #a78bfa;
  background: #1e1b2e;
  padding: 0.1rem 0.4rem;
  border-radius: 0.3rem;
}
</style>

