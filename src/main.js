import { createApp } from "vue";
import App from "./App.vue";
import MyHeader from "./MyHeader";

const app = createApp(App);

app.component("my-header", MyHeader);

app.mount("#app");
