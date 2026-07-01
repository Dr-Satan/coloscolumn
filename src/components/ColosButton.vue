<template>
  <button class="colos-btn" :class="{ pressed }" @click="handleClick">
    <span class="colos-btn__label">
      <slot>Click me!</slot>
    </span>
    <span class="colos-btn__crown" aria-hidden="true">👑</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['colos-click'])

const pressed = ref(false)

function handleClick() {
  pressed.value = true
  emit('colos-click')
  setTimeout(() => {
    pressed.value = false
  }, 200)
}
</script>

<style scoped>
.colos-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1.1rem 2.8rem;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed, #db2777);
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  box-shadow:
    0 4px 20px rgba(124, 58, 237, 0.5),
    0 0 0 0 rgba(167, 139, 250, 0);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
  user-select: none;
}

.colos-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow:
    0 8px 30px rgba(124, 58, 237, 0.65),
    0 0 20px rgba(244, 114, 182, 0.3);
}

.colos-btn.pressed,
.colos-btn:active {
  transform: translateY(1px) scale(0.97);
  box-shadow: 0 2px 10px rgba(124, 58, 237, 0.4);
}

.colos-btn__crown {
  font-size: 1.2rem;
  transition: transform 0.2s ease;
}

.colos-btn:hover .colos-btn__crown {
  transform: rotate(-10deg) scale(1.2);
}
</style>
