<script setup>
const modelValue = defineModel();

const onClick = () => {
  modelValue.value = !modelValue.value;
  document.querySelector(".container").classList.toggle("on");
  document.querySelector(".container").classList.toggle("off");

  // setTimeout(() => {
  //   if (modelValue.value) {
  //     window.Telegram.WebApp.openLink("https://google.com");
  //   }
  // }, 500);
};
</script>

<template>
  <div class="container off" @click="onClick">
    <div class="toggle">
      <div class="detail"></div>
      <div class="detail"></div>
      <div class="detail"></div>
    </div>
    <div class="text off">OFF</div>
    <div class="text on">ON</div>
  </div>
</template>

<style scoped>
#noise-svg {
  height: 100%;
  width: 100%;
  opacity: 0.05;
  z-index: 100;
  pointer-events: none;
}
#noise-svg #noise-rect {
  width: 100vw;
  height: 100vh;
}
.container {
  position: relative;
  width: 100%;
  height: 80px;
  border-radius: 100px;
  background: rgb(7, 7, 7);
  cursor: pointer;
  transition: box-shadow 0.4s ease;
}

.container.off {
  box-shadow: -2px -2px 4px 4px rgba(7, 7, 7, 0.5),
    -8px 0 4px 4px rgba(7, 7, 7, 0.5), -8px 0 3px 1px rgba(255, 0, 0, 0.2),
    4px 0 4px 4px rgba(7, 7, 7, 1), -3px 5px 3px 0 rgb(79 81 79),
    8px 3px 2px 0 rgb(79 81 79), inset 0 0 3px 1px rgba(255, 0, 0, 0.5),
    inset 0 0 24px 0 rgba(255, 0, 0, 0.5);
}
.container.on {
  box-shadow: -2px -2px 4px 4px rgba(38, 255, 0, 0.1),
    -8px 0 4px 4px rgba(7, 7, 7, 0.5), 8px 0 3px 1px rgba(60, 255, 0, 0.2),
    4px 0 4px 4px rgb(72, 72, 72), -3px 5px 3px 0 rgb(79 81 79),
    8px 3px 2px 0 rgb(72, 72, 72), inset 0 0 3px 1px rgb(13, 255, 0),
    inset 0 0 14px 0 rgb(38, 255, 0);
}
.toggle {
  width: 60%;
  height: 100%;
  background: linear-gradient(35deg, rgb(16 15 16) 0%, rgb(32 31 32) 100%);
  border-radius: 100px;
  position: absolute;
  transition: all 0.4s ease-in;
  z-index: 1;
}
.off .toggle {
  right: 40%;
  background: linear-gradient(35deg, rgb(45, 45, 45) 0%, rgb(56, 56, 56) 100%);
  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.4),
    inset 0px -3px 3px 0 rgba(0, 0, 0, 1),
    inset 0 3px 2px 0 rgba(79, 81, 79, 0.5),
    inset -2px 0px 3px 0 rgba(255, 0, 0, 0.5),
    /* rgba(255, 0, 0, 0.5) accent - dark when on */ inset 2px 0px 3px 0
      rgb(255, 0, 0),
    /* rgba(0, 255, 0, 0.1) accent - dark when off */ inset 0 0 0 0
      rgba(255, 0, 0, 0);
}
.on .toggle {
  right: 0;
  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.4),
    inset 0px -3px 3px 0 rgba(0, 0, 0, 1),
    inset 0 3px 2px 0 rgba(79, 81, 79, 0.5),
    inset -2px 0px 3px 0 rgb(51, 255, 0),
    /* rgba(255, 0, 0, 0.5) accent - dark when on */ inset 2px 0px 3px 0
      rgb(51, 255, 0),
    /* rgba(0, 255, 0, 0.1) accent - dark when off */ inset 0 0 0 0
      rgba(0, 0, 0, 0);
}
.detail {
  height: 30%;
  width: 4px;
  border-radius: 10px;
  box-shadow: -1px 1px 2px 0 rgba(0, 0, 0, 1),
    inset 1px -1px 2px 0 rgba(0, 0, 0, 1),
    inset -1px -1px 2px 0 rgba(0, 0, 0, 1),
    inset 0px -2px 2px 0 rgba(0, 0, 0, 1), inset 0px 2px 2px 0 rgb(79 81 79),
    inset 1px -1px 4px 0 rgb(79 81 79);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.detail:nth-child(1) {
  left: 10%;
}
.detail:nth-child(2) {
  right: 10%;
}

.text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
}

.text.on {
  left: 15%;
  color: rgb(39, 197, 0);
}
.text.off {
  right: 15%;
  color: rgb(175, 0, 0);
}
</style>
