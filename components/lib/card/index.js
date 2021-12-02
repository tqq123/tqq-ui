import Card from "./src/main.vue";
import "./index.scss";

Card.install = (Vue) => {
  Vue.component(Card.name, Card);
};

export default Card;
