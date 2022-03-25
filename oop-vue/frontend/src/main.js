import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./localization";
import { Settings } from "luxon";

Vue.config.productionTip = false;

new Vue({
  i18n,
  beforeMount: function () {
    Settings.defaultLocale = i18n.locale;
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
