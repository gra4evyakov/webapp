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
  <div class="common-title-info">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.common-title-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 8px;
  text-align: center;

  h1 {
    text-align: start;
    font-size: 46px;
    font-weight: 700;
    white-space: pre-line;
  }

  p {
    margin-bottom: 4px;
    text-align: start;
    font-size: 18px;
    line-height: 16px;
    font-style: italic;
  }
}
</style>
