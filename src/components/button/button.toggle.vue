<script setup lang="ts">
const modelValue = defineModel<boolean>();
</script>

<template>
  <div class="container">
    <input
      v-model="modelValue"
      id="toggle-button"
      type="checkbox"
      class="toggle-button"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 0 0.75rem;
}

.toggle-button {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 32px;
  margin: 0;
  vertical-align: top;
  background-color: rgb(96, 96, 96);
  border-radius: 3.75rem;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}

.toggle-button::after {
  content: "";
  display: inline-block;
  position: absolute;
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 3.75rem;
  transform: translateX(0);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, background-color 0.3s;
}

.toggle-button:checked::after {
  transform: translateX(calc(100% + 6px));
  background-color: rgb(170, 96, 0);
}
</style>
