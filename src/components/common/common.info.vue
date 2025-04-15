<script setup>
defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
});
</script>

<template>
  <div class="common-info">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.common-info {
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    white-space: pre-line;
  }
}
</style>
