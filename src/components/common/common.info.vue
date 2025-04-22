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
  gap: 12px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    white-space: pre-line;
  }

  p {
    font-size: 14px;
    white-space: pre-line;
  }
}
</style>
