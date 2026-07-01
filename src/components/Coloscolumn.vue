<template>
  <button
    class="coloscolumn-btn"
    :class="[`coloscolumn-btn--${variant}`, `coloscolumn-btn--${size}`, { 'coloscolumn-btn--disabled': disabled }]"
    :disabled="disabled"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
export interface ColoscolumnProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<ColoscolumnProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

function handleClick(event: MouseEvent) {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.coloscolumn-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  line-height: 1;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  white-space: nowrap;
  user-select: none;
}

/* Sizes */
.coloscolumn-btn--sm {
  padding: 6px 12px;
  font-size: 0.8rem;
}

.coloscolumn-btn--md {
  padding: 10px 20px;
  font-size: 1rem;
}

.coloscolumn-btn--lg {
  padding: 14px 28px;
  font-size: 1.2rem;
}

/* Variants */
.coloscolumn-btn--primary {
  background-color: #6366f1;
  color: #ffffff;
}

.coloscolumn-btn--primary:hover:not(:disabled) {
  background-color: #4f46e5;
}

.coloscolumn-btn--secondary {
  background-color: #e5e7eb;
  color: #1f2937;
}

.coloscolumn-btn--secondary:hover:not(:disabled) {
  background-color: #d1d5db;
}

.coloscolumn-btn--danger {
  background-color: #ef4444;
  color: #ffffff;
}

.coloscolumn-btn--danger:hover:not(:disabled) {
  background-color: #dc2626;
}

/* Disabled */
.coloscolumn-btn--disabled,
.coloscolumn-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
