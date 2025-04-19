<template>
  <section class="section-info">
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
</style>
