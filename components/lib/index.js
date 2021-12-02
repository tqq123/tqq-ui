import Demo from "./demo";
import Card from "./card";
import "../css/index.scss";

const components = {
  Demo,
  Card,
};

const install = (Vue) => {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

export default {
  install,
};
