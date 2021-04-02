import Vuex from "vuex";
import store from "./store/index.js";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

export default ({
  Vue,
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.use(Vuex);
  Vue.mixin({ store: store });
  Vue.use(Vuetify);
};
