<template>
  <div class="app">
    <h3>我是App组件(祖).{{ name }}--{{ price }}</h3>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
import Son from "./components/Son.vue";
import { reactive, toRefs, provide } from "vue";
export default {
  name: "App",
  components: { Child, Son },
  setup() {
    let car = reactive({
      name: "bwm",
      price: "40w",
    });
    provide("car", car); //给自己的后代组件传递数据
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
