<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
  </div>
</template>

<script>
import { ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy } from "vue";
export default {
  name: "App",
  setup() {
    //数据
    let car = reactive({
      name: "bwm",
      price: "40w",
    });
    let sum = ref(0);
    let car2 = readonly(car);

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));

    console.log(isProxy(car));
    console.log(isProxy(car2));

    return {
      sum,
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
