<template>
  <section v-motion-fade class="section-hero">
    <slot />
  </section>
</template>

<style scoped>
.section-hero {
  position: relative;
  padding-inline: 16px;
  padding-block: 8px var(--area-bottom);
  height: 100dvh;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
