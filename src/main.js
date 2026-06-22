import "./assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Container from "./components/Container.vue";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("Container", Container);

app.mount("#app");
