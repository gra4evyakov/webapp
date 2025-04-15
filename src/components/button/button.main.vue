<template>
  <button class="button-main">
    <slot />
  </button>
</template>

<style scoped>
.button-main {
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 12px;
  color: black;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;

  animation: shine 0.7s infinite alternate;
}

@keyframes shine {
  to {
    box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.5);
  }

  from {
    box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0);
  }
}
</style>
