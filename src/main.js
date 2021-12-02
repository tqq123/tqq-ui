import Vue from "vue";
import App from "./App.vue";
import TqqUI from "tqq-ui";
import "tqq-ui/dist/css/index.css";

Vue.config.productionTip = false;

Vue.use(TqqUI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
