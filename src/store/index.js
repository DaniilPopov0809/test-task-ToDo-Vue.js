import { createStore } from "vuex";
import { todoModule } from "@/store/modules/todoModule";

export default createStore({
  modules: {
    todo: todoModule,
  },
});
