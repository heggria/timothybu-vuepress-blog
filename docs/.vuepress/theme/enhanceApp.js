import Vuex from "vuex";
import store from "./store/index.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default ({ Vue }) => {
  Vue.use(Vuex);
  Vue.mixin({ store: store });
  Vue.use(ElementUI);
};
