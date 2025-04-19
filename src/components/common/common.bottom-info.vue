<script setup>
import { Arrow } from "../icons";
defineProps({
  title: {
    type: String,
  },
});

const priceFormater = (price) => {
  const formater = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  });
  return formater.format(price);
};
</script>

<template>
  <div class="common-bottom">
    <h1>СТОИМОСТЬ {{ priceFormater(5555) }}</h1>
    <Transition name="bounce">
      <div class="common-bottom__icon">
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

  h1 {
    margin-bottom: 16px;
    text-align: center;
    font-size: 52px;
    line-height: 60px;
    font-weight: 700;
  }

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
    transform: translateY(0px);
  }

  from {
    color: rgb(255, 174, 0);
    transform: translateY(10px);
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
