import "./assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ButtonStyle from "./components/ButtonStyle.vue";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("ButtonStyle", ButtonStyle);

app.mount("#app");
