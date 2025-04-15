<script setup>
import { Arrow } from "../icons";
defineProps({
  title: {
    type: String,
  },
  active: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="common-bottom">
    <Transition name="bounce">
      <div v-if="!active" class="common-bottom__icon">
        <h5>{{ title }}</h5>
        <div class="common-bottom__arrow">
          <Arrow />
        </div>
      </div>
    </Transition>
    <slot />
  </div>
</template>

<style scoped>
.common-bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: auto;

  h5 {
    font-size: 20px;
    animation: colors 0.7s infinite alternate;
  }

  svg {
    height: 32px;
    width: 32px;
  }
}

.common-bottom__icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.common-bottom__arrow {
  animation: colors 0.7s infinite alternate;
}

.common-bottom__button {
  width: 100%;
  height: 50px;
}

@keyframes colors {
  to {
    color: white;
  }

  from {
    color: rgb(255, 174, 0);
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
