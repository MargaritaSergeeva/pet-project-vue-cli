import { createApp } from "vue";
import App from "./App.vue";
import MyHeader from "./MyHeader";
import "./theme.css";

const app = createApp(App);

app.component("my-header", MyHeader);

app.mount("#app");
