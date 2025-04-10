import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { init } from "./init";

init();

const app = createApp(App);

app.mount("#app");
