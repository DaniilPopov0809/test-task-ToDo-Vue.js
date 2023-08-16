import { createApp } from "vue";
import VueFeather from 'vue-feather';
import App from "./App.vue";
import '@/css/tailwind.css'
import components from "@/components/UI";
import store from "@/store";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app
.component(VueFeather.name, VueFeather)
.use(store)
.mount("#app");
