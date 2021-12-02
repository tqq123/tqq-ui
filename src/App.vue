<template>
  <div id="app">
    <Demo />
    <m-card imgSrc="vite.png" summary="Vite零基础快速入门">
      <template slot="footer">
        <div class="footer">
          <div class="level">中级 · 528人</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
</style>
