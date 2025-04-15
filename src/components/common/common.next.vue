<script setup>
import { Arrow } from "../icons";
</script>

<template>
  <button class="common-next">
    ДАЛЕЕ
    <Arrow />
  </button>
</template>

<style scoped>
.common-next {
  position: absolute;
  bottom: 60px;
  right: 50%;
  left: 50%;
  translate: -50% 50%;
  height: 50px;
  width: 50px;

  animation: arrow 1s infinite;

  svg {
    height: 100%;
    width: 100%;
  }
}

@keyframes arrow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>
