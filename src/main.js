import "./assets/main.css";

import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import { init } from "./init";

init();

const app = createApp(App);

app.use(MotionPlugin);

app.mount("#app");
