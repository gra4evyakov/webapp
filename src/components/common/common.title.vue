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
  <div class="common-title">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.common-title {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 16px;
    text-align: start;
    font-size: 60px;
    font-weight: 700;
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
