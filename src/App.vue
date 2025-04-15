<script setup lang="ts">
import { ref } from "vue";
import Arrow from "./components/icons/arrow.vue";
import ButtonToggle from "./components/button/button.toggle.vue";

const homeRef = ref<HTMLElement | null>(null);
const toggle = ref(false);

const onArrowClick = () => {
  homeRef.value.scrollTo({
    top: homeRef.value.scrollHeight,
    behavior: "smooth",
  });
};
</script>

<template>
  <div ref="homeRef" class="home">
    <div class="home__container">
      <section v-motion-fade class="home__section home__section-hero">
        <h1 class="home__section-title">деньгOFF.NET</h1>
        <p class="home__section-text">
          ❝ Это не про «как заработать». Это про то, почему ты до сих пор в
          разрыве и как снова войти в поток. ❞
        </p>

        <button class="home__section-arrow" @click="onArrowClick">
          ДАЛЕЕ
          <Arrow />
        </button>
      </section>

      <section
        class="home__section home__section-info"
        :class="{ 'home__section-info_on': toggle }"
      >
        <div class="home__section-info-content">
          <div class="home__section-info-toggle">
            <div>
              <p class="home__section-subtitle">
                деньгOFF.NET — <br />
                поток включ.ON
              </p>
              <p class="home__section-text">
                двухдневная перезагрузка твоих отношений с деньгами
              </p>
            </div>
            <div class="home__section-info-toggle-container">
              <p class="off">деньгOFF</p>
              <ButtonToggle v-model="toggle" />
              <p class="on">включ.ON</p>
            </div>
          </div>

          <Transition name="slide-fade" mode="out-in">
            <div v-if="toggle" class="home__section-info-info">
              <h5>День 2 — включ.ON</h5>
              <p>
                когда включается не счёт — а ты – Покажу, как устроен денежный
                поток наглядно – Раскроем, чем богатство отличается от изобилия
                – Поделюсь инсайтом, с которого начался мой финансовый прорыв –
                И открою вход в наставничество для тех, кто готов идти глубже
              </p>
            </div>
            <div v-else class="home__section-info-info">
              <h5>День 1 — деньгOFF.NET</h5>
              <p>
                когда ты хочешь денег, но внутри всё обрывается – Погрузимся в
                корни: откуда у тебя твоя денежная реальность – Узнаешь, какая у
                тебя привязанность к деньгам и почему это важно – Проведёшь
                живой диалог с деньгами — впервые по-настоящему – Расскажешь им
                всё. Услышишь, что они скажут тебе
              </p>
            </div>
          </Transition>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100dvh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;

  scrollbar-width: none;
  color: #fafafa;
  background: #141414;
}

.home::-webkit-scrollbar {
  display: none;
}

.home__section {
  position: relative;
  padding-inline: 16px;
  padding-block: var(--area-top) var(--area-bottom);
  height: 100dvh;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home__section-info {
  background: rgba(20, 20, 20, 1);
}

.home__section-info::after {
  content: "";
  position: absolute;
  height: 100dvh;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 1) 20%,
    rgb(170, 96, 0) 100%
  );
  opacity: 0;
  transition: all 0.5s ease-in-out;
  pointer-events: none;
}

.home__section-info.home__section-info_on::after {
  opacity: 1;
}

.home__section-info-content {
  position: relative;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 30px;

  z-index: 1;
}

.home__section-info-toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 8px;
  border-radius: 12px;
  transition-duration: 0.5s;
}

.home__section-info-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 8px;
  text-align: center;

  h5 {
    font-size: 28px;
    font-weight: 700;
  }

  p {
    font-size: 20px;
  }
}

.home__section-info-toggle-container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border: 1px solid rgb(96, 96, 96);
  border-radius: 12px;
  backdrop-filter: blur(7px);

  p {
    font-size: 32px;
  }

  p:nth-child(1) {
    margin-bottom: 8px;
  }

  .on {
    opacity: 0.3;
  }

  .on,
  .off {
    transition-duration: 0.5s;
  }
}

.home__section-info_on {
  .on {
    opacity: 1;
  }

  .off {
    opacity: 0.3;
  }
}

.home__section-title {
  margin-bottom: 16px;
  text-align: start;
  font-size: 60px;
  font-weight: 700;
}

.home__section-subtitle,
.home__section-text {
  margin-bottom: 4px;
  text-align: start;
  font-size: 18px;
  line-height: 16px;
  font-style: italic;
}

.home__section-subtitle {
  margin-bottom: 12px;
  font-size: 48px;
  line-height: 40px;
  font-weight: 600;
}

.home__section-arrow {
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

.slide-fade-enter-active {
  transition: all 0.25s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
