<script setup>
import { ButtonToggle } from "../button";

const modelValue = defineModel();
</script>

<template>
  <label class="common-toggle" :class="{ active: modelValue }">
    <ButtonToggle v-model="modelValue" />
  </label>
</template>

<style scoped>
.common-toggle {
  width: 100%;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

p:nth-child(1) {
  margin-bottom: 8px;
}

.on {
  opacity: 0.3;
}

.on,
.off {
  font-size: 32px;
  transition-duration: 0.5s;
}

.active {
  border-color: white;
  .on {
    opacity: 1;
  }

  .off {
    opacity: 0.3;
  }
}
</style>
