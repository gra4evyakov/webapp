<script setup>
import { ref } from "vue";
import { SectionHero, SectionInfo } from "./components/section";
import {
  CommonInfo,
  CommonToggle,
  CommonNext,
  CommonTitle,
  CommonList,
  CommonBottomInfo,
} from "./components/common";
import { ButtonMain } from "./components/button";

const CONTENT = [
  {
    title: "ДЕНЬГOFF.NET",
    subtitle:
      "❝ Это не про «как заработать». Это про то, почему ты до сих пор в разрыве и как снова войти в поток. ❞",
    button: "ДАЛЕЕ",
  },
  {
    title: "деньгOFF.NET — \n поток включ.ON",
    subtitle: "двухдневная перезагрузка твоих отношений с деньгами",
    button: "ДАЛЕЕ",
    info: [
      {
        title: "День 1. деньгOFF.NET",
        subtitle:
          "– Погрузимся в корни: откуда у тебя твоя денежная реальность \n – Узнаешь, какая у тебя привязанность к деньгам и почему это важно \n – Проведёшь живой диалог с деньгами — впервые по-настоящему \n – Расскажешь им всё. Услышишь, что они скажут тебе",
      },
      {
        title: "День 2. включ.ON",
        subtitle:
          "когда включается не счёт — а ты \n –  Покажу, как устроен денежный поток наглядно \n – Раскроем, чем богатство отличается от изобилия \n – Поделюсь инсайтом, с которого начался мой финансовый прорыв \n – И открою вход в наставничество для тех, кто готов идти глубже",
      },
    ],
  },
];

const homeRef = ref(null);
const active = ref(false);

const telegram = window.Telegram.WebApp;

const onArrowClick = () => {
  homeRef.value.scrollTo({
    top: homeRef.value.scrollHeight,
    behavior: "smooth",
  });
};

const openPaymentForm = () => {
  telegram.openLink("https://yookassa.ru/my/i/aAfHUtlVqB6m/l");
};
</script>

<template>
  <div ref="homeRef" class="home" :class="{ home_active: active }">
    <div class="home__container">
      <SectionHero>
        <CommonToggle v-model="active" />
        <CommonTitle
          :title="CONTENT[0].title"
          :subtitle="CONTENT[0].subtitle"
        />
        <CommonNext :text="CONTENT[0].button" @click="onArrowClick" />
      </SectionHero>

      <SectionInfo>
        <Transition name="slide-fade">
          <CommonList>
            <CommonInfo
              :title="CONTENT[1].info[0].title"
              :subtitle="CONTENT[1].info[0].subtitle"
            />
            <CommonInfo
              :title="CONTENT[1].info[1].title"
              :subtitle="CONTENT[1].info[1].subtitle"
            />
          </CommonList>
        </Transition>
        <CommonBottomInfo title="ВОЙТИ В ПОТОК">
          <ButtonMain @click="openPaymentForm">ОПЛАТИТЬ</ButtonMain>
        </CommonBottomInfo>
      </SectionInfo>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  height: 100dvh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;

  scrollbar-width: none;
  color: #fafafa;
  background-color: #303030;
}

.home::after {
  content: "";
  position: fixed;
  height: 100dvh;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(0deg, #303030 20%, rgb(255, 174, 0) 100%);
  opacity: 0;
  transition: all 0.5s ease-in-out;
  pointer-events: none;
}

.home__container {
  position: relative;
  z-index: 1;
}

.home.home_active::after {
  opacity: 1;
}

.home::-webkit-scrollbar {
  display: none;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
