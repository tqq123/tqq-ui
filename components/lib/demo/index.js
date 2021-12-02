import Demo from "./src/main.vue";
import "./index.scss";

Demo.install = (Vue) => {
  Vue.component(Demo.name, Demo);
};

export default Demo;
