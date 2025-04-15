<template>
  <ul class="common-list">
    <slot />
  </ul>
</template>

<style scoped>
.common-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
