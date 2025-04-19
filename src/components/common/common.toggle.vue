<template>
  <div
    class="switch-container"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="switch" :class="{ active: isOn }">
      <!-- OFF State -->
      <div class="label-off" @click.stop="isOn = false">деньгOFF</div>

      <!-- Toggle Button -->
      <div class="toggle">
        <div class="toggle-button"></div>
      </div>

      <!-- ON State -->
      <div
        class="label-on"
        :class="{ inactive: !isOn }"
        @click.stop="isOn = true"
      >
        включ.ON
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineModel } from "vue";

const isOn = defineModel();

// Touch swipe logic
let touchStartX = 0;
let touchEndX = 0;

const onTouchStart = (event) => {
  touchStartX = event.touches[0].clientX;
};

const onTouchMove = (event) => {
  touchEndX = event.touches[0].clientX;
};

const onTouchEnd = () => {
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > 50) {
    // Свайп вправо - включить
    isOn.value = true;
  } else if (swipeDistance < -50) {
    // Свайп влево - выключить
    isOn.value = false;
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Arial", sans-serif;
}

.switch-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.switch {
  position: relative;
  width: 220px;
  padding: 8px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  background-color: #2e2e2e;
  border: 4px solid #4d4d4d;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

.label-off {
  margin-bottom: 12px;
  color: #bababa;
}

.label-on {
  color: #ffc107;
  transition: color 0.3s ease;
  text-shadow: 0 0 10px #ffc107;
}

.label-on.inactive {
  color: #666;
  text-shadow: none;
}

.label-off,
.label-on {
  text-align: center;
  font-size: 52px;
  transition-duration: 0.5s;
}

.toggle {
  position: relative;
  width: 100%;
  height: 64px;
  background-color: #282828;
  border: 4px solid #4d4d4d;
  border-radius: 32px;
  cursor: pointer;
}

.toggle-button {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 72px;
  height: 40px;
  background-color: #2e2e2e;
  border-radius: 32px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  transition-duration: 0.5s;
}

.switch.active {
  .toggle-button {
    background-color: #ffc107;
    left: calc(100% - 78px);
  }

  .label-off {
    color: #666;
  }
}
</style>
