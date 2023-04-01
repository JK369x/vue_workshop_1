<template>
  <button :className="buttonClass">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});

const buttonClass = computed(() => {
  return `custom-button ${props.class}`;
});
</script>

<style scoped>
.custom-button {
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
}

.primary-button {
  background-color: #2196f3;
  color: #fff;
}

.secondary-button {
  background-color: #f44336;
  color: #fff;
}
</style>
