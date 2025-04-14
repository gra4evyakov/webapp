<script setup lang="ts">
const onFocus = (e: Event) => {
  setTimeout(
    () =>
      document.documentElement.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      }),
    300
  );
};
</script>

<template>
  <section class="home">
    <header class="home__header"></header>

    <main class="home__main">
      <p v-for="i in 10">text</p>
    </main>

    <footer class="home__footer">
      <input type="text" @focus="onFocus" />
    </footer>
  </section>
</template>

<style scoped>
.home {
  padding-block: 50px;
  height: var(--tg-viewport-height);
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.home__header {
  width: 100%;
  height: 50px;
  background-color: gray;
}

.home__main {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    background-color: gray;
  }
}

.home__footer {
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 100;
  background-color: gray;

  input {
    width: 100%;
    height: 100%;
  }
}
</style>
