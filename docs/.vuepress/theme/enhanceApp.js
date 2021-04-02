import Vuex from "vuex";
import store from "./store/index.js";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";

export default ({ Vue }) => {
  Vue.use(Vuex);
  Vue.mixin({ store: store });
  Vue.use(ElementUI, { locale });
};
