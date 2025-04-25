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
    <h2>27-29 АПРЕЛЯ</h2>
    <h1>ИНТЕНСИВ</h1>
    <h2>«{{ title }}»</h2>
    <p>{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.common-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;

  h1 {
    margin-bottom: 16px;
    text-align: start;
    font-size: 64px;
    font-weight: 700;
  }

  h2 {
    margin-bottom: 16px;
    text-align: start;
    font-size: 32px;
    font-weight: 700;
  }

  p {
    margin-bottom: 4px;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    font-style: italic;
  }
}
</style>
