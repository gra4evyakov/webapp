<script setup>
defineProps({
  active: {
    type: Boolean,
  },
});
</script>

<template>
  <section class="section-info" :class="{ 'section-info_active': active }">
    <div class="section-info__content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section-info {
  position: relative;
  padding-inline: 16px;
  padding-block: var(--area-top) var(--area-bottom);
  height: 100dvh;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-info__content {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
}

.section-info::after {
  content: "";
  position: absolute;
  height: 100dvh;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(0deg, rgb(7, 7, 7) 20%, rgb(255, 174, 0) 100%);
  opacity: 0;
  transition: all 0.5s ease-in-out;
  pointer-events: none;
}

.section-info.section-info_active::after {
  opacity: 1;
}
</style>
