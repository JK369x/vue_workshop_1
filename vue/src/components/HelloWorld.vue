<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "./control/Button/CustomButton.vue";
</script>

<template>
  <div>
    <custom-button class="primary-button">
      <span>Primary Button</span>
    </custom-button>

    <custom-button class="secondary-button">
      <span>Secondary Button</span>
    </custom-button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
